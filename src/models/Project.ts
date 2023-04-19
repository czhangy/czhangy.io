// TS
import Tool from "@/models/Tool";

export default interface Project {
    name: string;
    slug: string;
    category: string;
    startDate: string;
    endDate: string;
    summary: string;
    tools: Tool[];
    link: string | null;
    git: string | null;
}
