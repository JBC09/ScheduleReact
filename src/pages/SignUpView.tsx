import React, { useRef } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useEmailVerification } from "../hooks/useEmailVerification";
import { useUserCreate } from "../hooks/useUserCreate";

const SignUpView: React.FC = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const codeRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const { isEmailVerified, remainingSecond, sendCertificateCode, validateEmail, startTimer } =
        useEmailVerification();
    const { userCreateApplication } = useUserCreate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const name = nameRef.current?.value ?? "";
        const email = emailRef.current?.value ?? "";
        const password = passwordRef.current?.value ?? "";
        userCreateApplication(name, email, password);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-90" style={{ minWidth: "450px" }}>
            <Row className="w-100">
                <Col>
                    <Card className="shadow-lg border-0 p-5 rounded-4">
                        <Card.Body>
                            <h2 className="text-center mb-4 fw-bold">Grass SignUp</h2>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">이름</Form.Label>
                                    <Form.Control ref={nameRef} type="text" placeholder="ex) 홍길동" size="sm" required />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">이메일</Form.Label>
                                    <Form.Control ref={emailRef} type="email" placeholder="ex) gildong@gmail.com" size="sm" required />

                                    {isEmailVerified && (
                                        <Form.Control
                                            ref={codeRef}
                                            type="number"
                                            placeholder="인증코드 입력"
                                            size="sm"
                                            className="mt-1"
                                            required
                                        />
                                    )}

                                    <Button
                                        className="mt-2"
                                        variant="outline-danger"
                                        size="sm"
                                        style={{ width: "100%" }}
                                        onClick={() => {
                                            const email = emailRef.current?.value;
                                            if (!email?.trim()) return alert("이메일을 입력해주세요.");
                                            if (isEmailVerified) {
                                                validateEmail(email, codeRef.current?.value ?? "");
                                            } else {
                                                sendCertificateCode(email);
                                            }
                                        }}
                                    >
                                        {isEmailVerified
                                            ? `인증하기 - ${Math.floor(remainingSecond / 60)
                                                .toString()
                                                .padStart(2, "0")}:${(remainingSecond % 60)
                                                .toString()
                                                .padStart(2, "0")}`
                                            : "이메일 인증번호 요청"}
                                    </Button>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">비밀번호</Form.Label>
                                    <Form.Control
                                        ref={passwordRef}
                                        type="password"
                                        placeholder="ex) pass1837@"
                                        size="sm"
                                        required
                                    />
                                </Form.Group>

                                <Button variant="dark" type="submit" size="sm" className="w-100 mt-2 fw-semibold">
                                    가입하기
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpView;
