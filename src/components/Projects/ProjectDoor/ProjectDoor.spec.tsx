import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import ProjectDoor, { ProjectDoorProps } from "./ProjectDoor";

describe("ProjectDoor", () => {
    let door: HTMLDivElement | null;

    /**
     * Checks that the left door is rendered correctly
     */
    const assertLeftDoorRendered = (): void => {
        expect(door).toHaveClass("left");
        expect(screen.queryByText("</")).toBeInTheDocument();
        expect(screen.queryByText("/>")).not.toBeInTheDocument();
    };

    /**
     * Checks that the right door is rendered correctly
     */
    const assertRightDoorRendered = (): void => {
        expect(door).toHaveClass("right");
        expect(screen.queryByText("/>")).toBeInTheDocument();
        expect(screen.queryByText("</")).not.toBeInTheDocument();
    };

    /**
     * Renders the component and assigns local variables
     *
     * @param {ProjectDoorProps} props Props to pass to the component
     */
    const renderProjectCard = (props: ProjectDoorProps): void => {
        render(<ProjectDoor side={props.side} open={props.open} />);
        door = screen.queryByTestId("door");
    };

    it("Renders correctly when open on the left", () => {
        renderProjectCard({ side: "left", open: true });
        expect(door).not.toHaveClass("closed");
        assertLeftDoorRendered();
    });

    it("Renders correctly when open on the right", () => {
        renderProjectCard({ side: "right", open: true });
        expect(door).not.toHaveClass("closed");
        assertRightDoorRendered();
    });

    it("Renders correctly when closed on the left", () => {
        renderProjectCard({ side: "left", open: false });
        expect(door).toHaveClass("closed");
        assertLeftDoorRendered();
    });

    it("Renders correctly when closed on the right", () => {
        renderProjectCard({ side: "right", open: false });
        expect(door).toHaveClass("closed");
        assertRightDoorRendered();
    });
});
