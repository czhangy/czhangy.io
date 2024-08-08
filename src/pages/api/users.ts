import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

import prisma from "@/lib/prisma";
import {
    CONFLICT,
    CREATED,
    FAILED_REGISTER_MSG,
    INTERNAL_SERVER_ERROR,
    INVALID_HTTP_METHOD_MSG,
    METHOD_NOT_ALLOWED,
    POST,
    PRISMA_DUPLICATE,
    TITLE_ALREADY_EXISTS_MSG,
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

        // Create user
        await prisma.adminUser.create({
            data: {
                username: username,
                password: bcrypt.hashSync(password, SALT_ROUNDS),
            },
        });

        // Send back success
        return res.status(CREATED).json({});
    } catch (err: any) {
        // Check for unique constraint failure on write
        if (err.code === PRISMA_DUPLICATE) {
            return res
                .status(CONFLICT)
                .json({ message: TITLE_ALREADY_EXISTS_MSG });
        } else {
            return res
                .status(INTERNAL_SERVER_ERROR)
                .json({ message: FAILED_REGISTER_MSG });
        }
    }
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> {
    if (req.method === POST) {
        return await handleRegisterRequest(req, res);
    } else {
        return res.status(METHOD_NOT_ALLOWED).json({
            error: INVALID_HTTP_METHOD_MSG,
        });
    }
}
