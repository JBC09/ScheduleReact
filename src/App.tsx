import React, {useEffect, useState} from "react"
import {Container} from "react-bootstrap";
import Header from "./components/Layout/Header.tsx";
import {Routes, Route} from "react-router-dom"
import NotFound from "./components/NotFound.tsx";
import LoginVIew from "./pages/LoginVIew.tsx";
import MainView from "./pages/MainView.tsx";
import SignUpView from "./pages/SignUpView.tsx";
import AddGrassView from "./pages/AddGrassView.tsx";
import {ToastContainer} from 'react-toastify';
import LoadingView from "./pages/LoadingView.tsx";
import {useGlobal} from "./GlobalContext.tsx";


const App: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {globalUserName, setGlobalUserName} = useGlobal();

    useEffect(() => {
        if(globalUserName === "") {
            setIsLogin(false);
            return;
        }

        setIsLoading(true);

        fetch("http://localhost:8080/user/getInfo", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then((data) => {

                if (data.userId !== null) {
                    setIsLogin(true);
                    setGlobalUserName(data.userName);
                }
                else {
                    // 로그인 끊기
                    setIsLogin(false);
                }
                setIsLoading(false);
                
                console.log(data)

            })
            .catch((error) => {
                console.error("Error:", error);
                setIsLoading(false);
            })
    }, [localStorage.getItem("token")])

    if (isLoading) {
        return <LoadingView/>
    }
    return (
        <>
            <Header isLogin={isLogin} userName={globalUserName} setIsLogin={setIsLogin}/>

            <ToastContainer/>
            <Container className={"vh-100"}
                       style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                <Routes>
                    {/*<Route path="" element={}/>*/}
                    <Route path="/" element={<MainView isLogin={isLogin}/>}/>
                    <Route path="/addGrass" element={<AddGrassView/>}/>
                    <Route path="/login" element={<LoginVIew/>}/>
                    <Route path="/signup" element={<SignUpView/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Container>
        </>

    );
};

export default App
