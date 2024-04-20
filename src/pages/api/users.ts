import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { AdminUser } from "@prisma/client";

import prisma from "@/lib/prisma";
import {
    BAD_REQUEST,
    CONFLICT,
    CREATED,
    FAILED_LOGIN_MSG,
    FAILED_REGISTER_MSG,
    GENERIC_FAILED_MSG,
    GET,
    INCORRECT_PASSWORD_MSG,
    INTERNAL_SERVER_ERROR,
    INVALID_HTTP_METHOD_MSG,
    METHOD_NOT_ALLOWED,
    NOT_FOUND,
    OK,
    POST,
    STRING,
    UNAUTHORIZED,
    USER_NOT_FOUND_MSG,
    USERNAME_ALREADY_EXISTS_MSG,
    VALIDATION_ERROR_MSG,
} from "@/static/constants";
import { APIQueryParam } from "@/static/types";

/** The number of salt rounds to use for bcrypt */
const SALT_ROUNDS: number = 10;

/**
 * Logs in if the provided info is correct
 *
 * @param {NextApiRequest} req The request object
 * @param {NextApiResponse} res The response object
 * @returns {Promise<void>} An HTTP response
 */
const handleLoginRequest = async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    try {
        // Extract params
        const usernameParam: APIQueryParam = req.query.username;
        const passwordParam: APIQueryParam = req.query.password;

        // Check params
        if (
            typeof usernameParam !== STRING ||
            typeof passwordParam !== STRING
        ) {
            return res
                .status(BAD_REQUEST)
                .json({ error: VALIDATION_ERROR_MSG });
        }

        // Type cast params
        const username: string = usernameParam as string;
        const password: string = passwordParam as string;

        // Get user
        const user: AdminUser | null = await prisma.adminUser.findUnique({
            where: { username: username },
        });

        // If user not found, raise error
        if (!user) {
            return res.status(NOT_FOUND).json({ error: USER_NOT_FOUND_MSG });
        }

        // Check password
        if (!bcrypt.compareSync(password, user.password)) {
            return res
                .status(UNAUTHORIZED)
                .json({ error: INCORRECT_PASSWORD_MSG });
        }

        // Send back success
        return res.status(OK).json({});
    } catch (_: any) {
        return res
            .status(INTERNAL_SERVER_ERROR)
            .json({ error: FAILED_LOGIN_MSG });
    }
};

/**
 * Creates a user, if the username is not taken
 *
 * @param {NextApiRequest} req The request object
 * @param {NextApiResponse} res The response object
 * @returns {Promise<void>} An HTTP response
 */
const handleRegisterRequest = async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    try {
        // Extract params
        const username: string = req.body.username;
        const password: string = req.body.password;

        // Check if username exists and error if it does
        console.log("hi");
        const existingUser: AdminUser | null =
            await prisma.adminUser.findUnique({
                where: { username: username },
            });
        if (existingUser) {
            return res
                .status(CONFLICT)
                .json({ error: USERNAME_ALREADY_EXISTS_MSG });
        }

        // Create user
        await prisma.adminUser.create({
            data: {
                username: username,
                password: bcrypt.hashSync(password, SALT_ROUNDS),
            },
        });

        // Send back success
        return res.status(CREATED).json({});
    } catch (_: any) {
        return res
            .status(INTERNAL_SERVER_ERROR)
            .json({ error: FAILED_REGISTER_MSG });
    }
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> {
    try {
        if (req.method === GET) {
            return await handleLoginRequest(req, res);
        } else if (req.method === POST) {
            return await handleRegisterRequest(req, res);
        } else {
            return res.status(METHOD_NOT_ALLOWED).json({
                error: INVALID_HTTP_METHOD_MSG,
            });
        }
    } catch (_: any) {
        return res
            .status(INTERNAL_SERVER_ERROR)
            .json({ error: GENERIC_FAILED_MSG });
    }
}
