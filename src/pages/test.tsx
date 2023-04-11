// TS
import type { NextPage } from "next";

const Test: NextPage = () => {
    return (
        <div
            style={{
                background: "#003b5c",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    alignItems: "center",
                    background: "#2774ae",
                    borderRadius: "100px",
                    display: "flex",
                    padding: "0.5rem",
                }}
            >
                <div
                    style={{
                        borderRadius: "50%",
                        background: "#003b5c",
                        height: "100px",
                        width: "100px",
                        marginRight: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        style={{
                            height: "50px",
                            width: "50px",
                            filter: "invert(84%) sepia(35%) saturate(5847%) hue-rotate(6deg) brightness(111%) contrast(110%)",
                        }}
                        src="/assets/images/projects/temp.svg"
                    ></img>
                </div>
                <p
                    style={{
                        color: "#FFD100",
                        fontFamily: "Overpass",
                        fontSize: "2rem",
                        marginRight: "2rem",
                    }}
                >
                    CZhangy's Survival Guides
                </p>
            </div>
        </div>
    );
};

export default Test;
