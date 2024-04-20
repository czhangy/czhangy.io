import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { AdminUser } from "@prisma/client";

import prisma from "@/lib/prisma";
import {
    CONFLICT,
    CREATED,
    FAILED_REGISTER_MSG,
    GENERIC_FAILED_MSG,
    GET,
    INTERNAL_SERVER_ERROR,
    INVALID_HTTP_METHOD_MSG,
    METHOD_NOT_ALLOWED,
    POST,
    UNIMPLEMENTED,
    UNIMPLEMENTED_MSG,
    USERNAME_ALREADY_EXISTS_MSG,
} from "@/static/constants";

/** The number of salt rounds to use for bcrypt */
const SALT_ROUNDS: number = 10;

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
            return res.status(UNIMPLEMENTED).json({ error: UNIMPLEMENTED_MSG });
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
