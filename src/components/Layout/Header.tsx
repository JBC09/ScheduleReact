import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate(); // 페이지 이동용 훅

    return (
        // Navbar : 반응형 상단 네비게이션 바
        <Navbar bg="light" expand="lg" className="shadow-sm" fixed={"top"}>
            <Container>
                <Navbar.Brand
                    onClick={() => navigate('/')}
                    className="fw-bold"
                    style={{ cursor: 'pointer'}}
                >
                    <img
                        src="/calLogo.png"
                        alt="Logo"
                        style={{ width: '32px', height: '32px', marginRight: '4px' }}
                    />

                    <span>Schedule</span>
                </Navbar.Brand>

                {/* 토글 버튼 (모바일 메뉴용) */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* 실제 내비게이션 메뉴 영역 */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* 넣고 싶은 속성 넣으면 될 듯? */}
                    </Nav>

                    {/* 오른쪽 로그인/회원가입 버튼 */}
                    <div className="d-flex">
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
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
