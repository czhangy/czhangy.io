import { NextApiRequest, NextApiResponse } from "next";
import { EntrySection } from "@prisma/client";

import prisma from "@/lib/prisma";
import {
    CONFLICT,
    CREATED,
    FAILED_REGISTER_MSG,
    GENERIC_FAILED_MSG,
    INTERNAL_SERVER_ERROR,
    INVALID_HTTP_METHOD_MSG,
    METHOD_NOT_ALLOWED,
    POST,
    PRISMA_DUPLICATE,
    TITLE_ALREADY_EXISTS_MSG,
} from "@/static/constants";

/**
 * Posts a journal entry to the DB
 *
 * @param {NextApiRequest} req The request object
 * @param {NextApiResponse} res The response object
 * @returns {Promise<void>} An HTTP response
 */
const handlePostJournalEntry = async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    try {
        // Extract params
        const title: string = req.body.title;
        const sections: EntrySection[] = JSON.parse(req.body.sections);

        // Write entry to DB
        await prisma.entry.create({
            data: {
                title: title,
                slug: encodeURIComponent(title),
                sections: sections,
                timestamp: new Date(),
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
    try {
        if (req.method === POST) {
            return await handlePostJournalEntry(req, res);
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
