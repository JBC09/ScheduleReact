import {Button, Card, Form} from "react-bootstrap";
import {useRef, useState} from "react";
import {SketchPicker} from "react-color"
import {type NavigateFunction, useNavigate} from "react-router-dom";

const AddGrassView = () => {
    const [color, setColor] = useState({r: 255, g: 0, b: 0, a: 1});
    const grassNameRef : any = useRef(null);

    const myGrassForm: any = new FormData();

    const navigate: NavigateFunction = useNavigate();



    const goAddGrass = () => {
        myGrassForm.append("grassName", grassNameRef.current.value);
        myGrassForm.append("grassColor", `#${color.a}${color.b}${color.g}${color.r}`)

        fetch("http://localhost:8080/api/v1/grass/add", {
            body: myGrassForm,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                    console.error("Error:", error);
                }
            )
    }
    const handleColorChange = (colorResult: any) => {
        setColor({r: colorResult.rgb.r, g: colorResult.rgb.g, b: colorResult.rgb.b, a: colorResult.rgb.a});
    };

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F5F5F5",
            position: "absolute",
            opacity: 1,
            top: "0",
            left: "0",
        }}>
            <Card className="shadow-lg border-0 p-5 rounded-4"
                  style={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "400px"}}>
                <h2 style={{textAlign: "left", fontWeight: "bold"}} className={"mb-5"}>Add Grass</h2>

                <form style={{width: "300px"}} className={"d-flex flex-column gap-4"}>
                    <Form.Group controlId="GrassName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="text" placeholder="잔디 이름을 선택하세요"/>
                    </Form.Group>

                    <Form.Group controlId="GrassColor">
                        <Form.Label style={{display: "block"}}>색상</Form.Label>
                        <div style={{margin: "0 auto", display: "inline-block"}}>
                            <SketchPicker color={color} onChange={handleColorChange}/>
                        </div>
                    </Form.Group>


                    <Button
                        variant={"dark"}
                        onClick={goAddGrass}
                    >Make</Button>

                    <Button
                        variant={"outline-danger"}
                        onClick={() => navigate("/")}
                    >Close Modal</Button>
                </form>
            </Card>

        </div>
    )
}

export default AddGrassView;