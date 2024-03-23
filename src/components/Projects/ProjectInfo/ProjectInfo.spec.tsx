import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import {
    mockMultiToolProject,
    mockNoGitHubProject,
    mockNoLinkProject,
    mockNoLinksProject,
    mockNoToolsProject,
    mockProject,
} from "@/mocks/projects";

import ProjectInfo, { ProjectInfoProps } from "./ProjectInfo";

describe("ProjectInfo", () => {
    let images: HTMLImageElement[];
    let headings: HTMLHeadingElement[];
    let links: HTMLAnchorElement[];
    let toolsList: HTMLUListElement | null;
    let tools: HTMLLIElement[];

    /**
     * Checks to see if the tools section is rendered correctly
     */
    const assertToolsSectionRenders = (): void => {
        expect(headings.length).toBe(3);
        expect(headings[2]).toHaveTextContent("Tools");
        expect(toolsList).toBeInTheDocument();
    };

    /**
     * Checks to see if a GitHub link is rendered correctly
     */
    const assertGitHubLinkRenders = (
        link: HTMLAnchorElement,
        image: HTMLImageElement,
        href: string,
    ): void => {
        expect(link).toHaveAttribute("href", href);
        expect(image).toHaveAttribute("alt", "Git Repo");
    };

    /**
     * Checks to see if a site link is rendered correctly
     */
    const assertSiteLinkRenders = (
        link: HTMLAnchorElement,
        image: HTMLImageElement,
        href: string,
    ): void => {
        expect(link).toHaveAttribute("href", href);
        expect(image).toHaveAttribute("alt", "Site Link");
    };

    /**
     * Renders the component and assigns local variables
     *
     * @param {ProjectInfoProps} props Props to pass to the component
     */
    const renderProjectInfo = (props: ProjectInfoProps): void => {
        render(<ProjectInfo project={props.project} />);
        images = screen.queryAllByRole("img");
        headings = screen.queryAllByRole("heading");
        links = screen.queryAllByRole("link");
        toolsList = screen.queryByRole("list");
        tools = screen.queryAllByRole("listitem");
    };

    it("Renders correctly", () => {
        renderProjectInfo({ project: mockProject });
        expect(images[0]).toHaveAttribute("alt", mockProject.name);
        expect(headings[0]).toHaveTextContent(mockProject.category);
        expect(screen.queryByTestId("project-summary")).toHaveTextContent(
            mockProject.summary,
        );
        expect(headings[1]).toHaveTextContent("Summary");
    });

    it("Renders the links section correctly when no links are present", () => {
        renderProjectInfo({ project: mockNoLinksProject });
        expect(links.length).toBe(0);
        expect(images.length).toBe(1);
    });

    it("Renders the links section correctly when the GitHub link isn't present", () => {
        renderProjectInfo({ project: mockNoGitHubProject });
        expect(links.length).toBe(1);
        expect(images.length).toBe(2);
        assertSiteLinkRenders(links[0], images[1], mockNoGitHubProject.link!);
    });

    it("Renders the links section correctly when the site link isn't present", () => {
        renderProjectInfo({ project: mockNoLinkProject });
        expect(links.length).toBe(1);
        expect(images.length).toBe(2);
        assertGitHubLinkRenders(links[0], images[1], mockNoLinkProject.git!);
    });

    it("Renders the links section correctly when both links are present", () => {
        renderProjectInfo({ project: mockProject });
        expect(links.length).toBe(2);
        expect(images.length).toBe(3);
        assertGitHubLinkRenders(links[0], images[1], mockProject.git!);
        assertSiteLinkRenders(links[1], images[2], mockProject.link!);
    });

    it("Renders the tool section correctly when no tools are present", () => {
        renderProjectInfo({ project: mockNoToolsProject });
        expect(headings.length).toBe(2);
        expect(toolsList).not.toBeInTheDocument();
        expect(tools.length).toBe(0);
    });

    it("Renders the tool section correctly when 1 tool is present", () => {
        renderProjectInfo({ project: mockProject });
        assertToolsSectionRenders();
        expect(tools.length).toBe(1);
    });

    it("Renders the tool section correctly when multiple tool is present", () => {
        renderProjectInfo({ project: mockMultiToolProject });
        assertToolsSectionRenders();
        expect(tools.length).toBe(2);
    });
});
