import React, {useState} from "react";
import {Button, Container} from "react-bootstrap";
import AddGrassView from "../../pages/AddGrassView.tsx";


const GrassBoard: React.FC = () => {

    const objectList: any[] = [];
    let tempList: number[] = [];

    const weekTo: number = new Date(new Date().getFullYear(), 0, 1).getDay();

    for(let i = 0; i < weekTo; i++) {
        tempList.push(-1);
    }


    for (let i = 0+weekTo; i < 365+weekTo; i++) {
        if (i % 7 == 0 && i != 0) {
            objectList.push([...tempList]);
            tempList = [];
        }
        tempList.push(i);
    }

    if (tempList.length != 0) {
        objectList.push([...tempList]);
    }

    return (
        <Container>
            <div style={{borderRadius: "0.5rem", width: "100%"}}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem"
                }}>
                    <h1 className={"mainSectionTitle"}>
                        365 Grass Board
                    </h1>
                </div>

                <div className={"wrap-day-box-container"}>

                    {
                        objectList.map((item) => {
                            return <div style={{display: "flex", flexDirection: "column", gap: "0.3rem", alignItems:"start"}}
                                        key={item} >
                                {

                                    item.map((index: number) => {
                                        // 요일 인덱스 기준으로 색상 클래스 결정

                                        if(index == -1) {
                                            return(
                                                <div  className={`day-box bg-white`} style={{backgroundColor:"#222", animation: "unset", animationDelay: "unset"}}></div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div
                                                    key={index}
                                                    className={`day-box bg-white`}

                                                    style={{"--i": Math.floor(Math.random() * 250 + Math.abs(180-index)), "--j": index % 2 == 0 ? 60: -60}}
                                                ></div>
                                            );
                                        }
                                    })
                                }
                            </div>
                        })
                    }
                </div>
            </div>

        </Container>

    )
}

export default GrassBoard