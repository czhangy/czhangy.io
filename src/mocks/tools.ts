import { Tool } from "@prisma/client";

/** A basic mock tool */
export const mockTool1: Tool = {
    id: "test_id_1",
    name: "Test 1",
    color: "#000000",
    projectIDs: [],
};

/** Another basic mock tool */
export const mockTool2: Tool = {
    id: "test_id_2",
    name: "Test 2",
    color: "#FFFFFF",
    projectIDs: [],
};

/** The list of all mock tools */
export const mockTools = [mockTool1, mockTool2];
