import React, {useEffect, useState} from "react";
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap";

const SignUpView: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("로그인 시도");
    };

    const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
    const [remaingSecond, setRemaingSecond] = useState<number>(0);

    useEffect(() => {
        const preVerifiedTime  : string | null = localStorage.getItem("preVerifiedTime");

        setIsEmailVerified(false);
        if(preVerifiedTime != null) {
            const prevTime : number = parseInt(preVerifiedTime);
            const currentTime : number = new Date().getTime();
            const diffTime : number = currentTime - prevTime;

            if(diffTime < (180 * 1000)) {
                countingFC(Math.floor(diffTime / 1000));
            }
            else {
                localStorage.removeItem("preVerifiedTime");
            }
        }
    }, [])


    const countingFC = (startSecond : number = 0) => {

        if (isEmailVerified) {
            alert("인증번호 유효 시간이 끝나지 않았습니다.");
            return;
        }

        setIsEmailVerified(true);


        if(startSecond == 0) {
            localStorage.setItem("preVerifiedTime", new Date().getTime().toString());
        }
        console.log(startSecond)


        for (let i: number = startSecond; i <= 180; i++) {
            setTimeout(() => {
                setRemaingSecond(((180 - i) % 60));
            }, i * 1000)
        }

        setTimeout(() => {
            setIsEmailVerified(false); // 종료
        }, 180 * 1000) // 180 * 1000ms
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center vh-90"
            style={{minWidth: "450px"}}
        >
            {/* 🔹 width 확장: 최대 480px로 변경 */}
            <Row className="w-100">
                <Col>
                    <Card className="shadow-lg border-0 p-5 rounded-4">
                        <Card.Body>
                            {/* 🔹 타이포 크기 및 간격 확대 */}
                            <h2 className="text-center mb-4 fw-bold">회원가입</h2>

                            <Form onSubmit={handleSubmit}>


                                <Form.Group controlId="formEmail" className="mb-4">
                                    <Form.Label className="fw-semibold">이름</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="홍길동"
                                        size="sm"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className="mb-4">
                                    <Form.Label className="fw-semibold">이메일</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="example@email.com"
                                        size="sm"
                                        required
                                    />

                                    <Button className="mt-2" variant="outline-danger" style={{width: "100%"}} size="sm"
                                            onClick={() => {
                                                countingFC()
                                            }}>
                                        {
                                            isEmailVerified
                                                ?
                                                (((remaingSecond / 60) / 10 > 0 ? Math.floor((remaingSecond / 10)) : "0" + Math.floor((remaingSecond / 10))) +
                                                    " : "
                                                    + (remaingSecond / 10 > 0 ? remaingSecond : "0" + remaingSecond))
                                                :
                                                "이메일 인증번호 요청"
                                        }
                                    </Button>


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
                                    size="sm"
                                    className="w-100 mt-2 fw-semibold"
                                >
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
