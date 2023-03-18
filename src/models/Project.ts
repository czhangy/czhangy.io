export default interface Project {
    name: string;
    slug: string;
    category: string;
    startDate: string;
    endDate: string;
    link: string | null;
    git: string | null;
}
