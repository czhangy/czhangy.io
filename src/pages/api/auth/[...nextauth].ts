import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";
import { AdminUser } from "@prisma/client";

import prisma from "@/lib/prisma";
import { User } from "@/static/types";

async function getUser(username: string): Promise<AdminUser | null> {
    try {
        const adminUser: AdminUser | null = await prisma.adminUser.findUnique({
            where: { username: username },
        });
        return adminUser;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw new Error("Failed to fetch user.");
    }
}

export const authOptions: AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({
                        username: z.string(),
                        password: z.string(),
                    })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { username, password } = parsedCredentials.data;
                    const user: User | null = await getUser(username);
                    if (!user) return null;
                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );

                    if (passwordsMatch) return user as any;
                }

                console.log("Invalid credentials");
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 365 * 24 * 60 * 60, // 1 year
    },
};

export default NextAuth(authOptions);
