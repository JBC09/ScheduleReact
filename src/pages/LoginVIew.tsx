import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {Link} from "react-router-dom";

const LoginVIew: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("로그인 시도");
    };


    return (
        <Container
            className="d-flex justify-content-center align-items-center vh-90"
            style={{minWidth: "450px"}}
        >
            {/* 🔹 width 확장: 최대 480px로 변경 */}
            <Row className="w-100" style={{ maxWidth: "450px"}}>
                <Col>
                    <Card className="shadow-lg border-0 p-5 rounded-4">
                        <Card.Body>
                            {/* 🔹 타이포 크기 및 간격 확대 */}
                            <h2 className="text-center mb-4 fw-bold">로그인</h2>
                            <p className="text-center text-muted mb-4">
                                포털에 접속하려면 로그인해주세요.
                            </p>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formEmail" className="mb-4">
                                    <Form.Label className="fw-semibold">이메일</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="example@email.com"
                                        size="sm" /* 🔹 input 크기 확대 */
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mb-4">
                                    <Form.Label className="fw-semibold">비밀번호</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="비밀번호를 입력하세요"
                                        size="sm"
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    size="sm" /* 🔹 버튼 크기 확대 */
                                    className="w-100 mt-2 fw-semibold"
                                >
                                    로그인
                                </Button>

                                <div className="text-center mt-4">
                                    <Link  to="/signup"
                                           className="text-decoration-none fw-medium text-primary">
                                        계정이 없으신가요? 회원가입
                                    </Link>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginVIew;
