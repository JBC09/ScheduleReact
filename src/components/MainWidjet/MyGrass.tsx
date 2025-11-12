import {Button, Container} from "react-bootstrap";
import {Link, type NavigateFunction, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const MyGrass = () => {
    const grassMockList: any[] = [];

    for(let i = 0; i < 10; i++) {
        grassMockList.push({grassColor: "#"+((255).toFixed(0) + (Math.random() * 155+40).toFixed(0) + (Math.random() * 10).toFixed(0)).toString(), grassName: "연차", grassId: 1});
    }

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        console.log("MyGrass.tsx")
    }, []);

    return (
        <Container style={{justifyContent: "start", textAlign: "left", gap: "1rem"}}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem"
            }}>
                <h1 className={"mainSectionTitle"}>My Grass
                    List</h1>

                <Button
                    variant={"dark"}
                    style={{
                        cursor: "pointer",
                        width: "10rem",
                        height: "2.5rem",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        borderRadius: "0.5rem",
                        border: "none",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0 1rem"
                    }}

                    onClick={() => {
                        navigate("/addGrass")
                    }}
                >add Grass</Button>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                    gap: "1rem",
                    padding: "1.5rem",
                    backgroundColor: "#1a1a1a",
                    borderRadius: "1rem",
                }}
            >
                {
                    grassMockList.length == 0 ? <h3 style={{color: "white"}}>Please Add to Grass</h3> :
                        grassMockList.map((item, idx) => (
                            <div
                                key={idx}
                                className="grassItem"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.8rem 1rem",
                                    backgroundColor: "#2a2a2a",
                                    borderRadius: "0.75rem",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                                    transition: "all 0.2s ease",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
                            >
                                <div
                                    style={{
                                        backgroundColor: item.grassColor,
                                        width: "36px",
                                        height: "18px",
                                        borderRadius: "6px",
                                        border: "1px solid #444",
                                    }}
                                ></div>
                                <p
                                    style={{
                                        margin: 0,
                                        color: "#f1f1f1",
                                        fontWeight: 500,
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {item.grassName}
                                </p>
                            </div>
                        ))}
            </div>
        </Container>
    );
}

export default MyGrass;