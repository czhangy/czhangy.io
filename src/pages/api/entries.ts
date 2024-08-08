import { NextApiRequest, NextApiResponse } from "next";

import {
    CREATED,
    FAILED_REGISTER_MSG,
    GENERIC_FAILED_MSG,
    INTERNAL_SERVER_ERROR,
    INVALID_HTTP_METHOD_MSG,
    METHOD_NOT_ALLOWED,
    POST,
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
        const sections: string[] = req.body.sections;

        console.log(title);
        console.log(sections);

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
