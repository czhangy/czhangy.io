import Tool from "@/models/Tool";

export default interface Project {
    name: string;
    slug: string;
    category: string;
    summary: string;
    tools: Tool[];
    link: string | null;
    git: string | null;
}
