import React, {useEffect} from "react"
import {Container} from "react-bootstrap";
import Header from "./components/Layout/Header.tsx";
import {Routes, Route} from "react-router-dom"
import NotFound from "./components/NotFound.tsx";
import LoginVIew from "./pages/LoginVIew.tsx";
import MainView from "./pages/MainView.tsx";
import SignUpView from "./pages/SignUpView.tsx";

const App: React.FC = () => {

    useEffect(() => {
        console.log("App.tsx")
    }, [])
    return (
        <>
            <Header/>

            <Container>
                <Routes>
                    {/*<Route path="" element={}/>*/}
                    <Route path="/" element={<MainView isLogin={false}/>}  />
                    <Route path="/login" element={<LoginVIew/>}/>
                    <Route path="/signup" element={<SignUpView/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Container>

        </>
    );
};

export default App
