import {Container} from "react-bootstrap";
import GrassContainer from "../components/MainWidjet/GrassContainer.tsx";

const MainView = ({isLogin}: {isLogin: boolean}) => {
    console.log("Hi")


    return (
        <Container>
            {isLogin ? <GrassContainer></GrassContainer> : <h2>로그인 후 사용가능합니다.</h2>}
        </Container>
    )
}

export default MainView