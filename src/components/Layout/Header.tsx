import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import {useGlobal} from "../../GlobalContext.tsx";

const Header: React.FC = ({userName, isLogin, setIsLogin}: {userName: string, isLogin: boolean, setIsLogin: (isLogin: boolean) => void}) => {
    const navigate = useNavigate(); // 페이지 이동용 훅
    const {globalUserName, setGlobalUserName} = useGlobal();

    const logout = () => {
        fetch("http://localhost:8080/user/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token") ?? ""
            }
        })

        // 로그아웃 토큰 삭제
        localStorage.removeItem("token");
        
        // GlobalUserName 없애기
        setGlobalUserName("");
        toast("로그아웃 하셨습니다.");
    }

    return (
        // Navbar : 반응형 상단 네비게이션 바
        <Navbar bg="light" expand="lg" className="shadow-sm" fixed={"top"}>
            <Container>
                <Navbar.Brand
                    onClick={() => navigate('/')}
                    className="fw-bold text-dark"
                    style={{ cursor: 'pointer', alignItems: 'end', display: 'flex'}}
                >
                    <img
                        src="/grassLogo.png"
                        alt="Logo"
                        style={{ width: '32px', height: '32px', marginRight: '10px' }}
                    />

                    <span >Grass Schedule</span>
                </Navbar.Brand>

                {/* 토글 버튼 (모바일 메뉴용) */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* 실제 내비게이션 메뉴 영역 */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* 넣고 싶은 속성 넣으면 될 듯? */}
                    </Nav>

                    {/* 오른쪽 로그인/회원가입 버튼 */}
                    {
                        isLogin ?
                            <div className="d-flex">
                                <Button
                                    variant="outline-dark"
                                    size="sm"
                                    className="me-2"
                                    // onClick={() => navigate('/myGrass')}
                                >
                                   <b> {globalUserName}</b>님
                                </Button>

                                <Button
                                    variant="outline-dark"
                                    size="sm"
                                    className="me-2"
                                    onClick={logout}
                                >
                                로그아웃
                                </Button>
                            </div>
                            :
                        <><div className="d-flex">
                            <Button
                                variant="outline-dark"
                                size="sm"
                                className="me-2"
                                onClick={() => navigate('/login')}
                            >
                                로그인
                            </Button>
                            <Button
                                variant="dark"
                                size="sm"
                                onClick={() => navigate('/signup')}
                            >
                                회원가입
                            </Button>
                        </div></>


                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
