import {Container} from "react-bootstrap";
import GrassBoard from "../components/MainWidjet/GrassBoard.tsx";
import MyGrass from "../components/MainWidjet/MyGrass.tsx";

const MainView = ({isLogin}: {isLogin: boolean}) => {

    if(!isLogin) {
        return (
            <Container className={"d-flex flex-column justify-content-center align-items-center vh-80"} style={{marginTop: "10rem"}} >
                <h1>로그인 후 이용이 가능합니다.</h1>
            </Container>
        )
    }

    return (
        <Container className={"d-flex flex-column justify-content-start align-items-start vh-100"} style={{gap: "8rem", marginTop: "17rem"}}>
            <GrassBoard/>
            <MyGrass/>
        </Container>
    )
}

export default MainView