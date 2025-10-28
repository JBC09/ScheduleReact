import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// React.FC : React 함수형 컴포넌트 타입 지정
const NotFound: React.FC = () => {
    const navigate = useNavigate(); // 페이지 이동을 위한 React Router 훅

    return (
        <Container
            className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
        >
            {/* vh-100 : 화면 세로 전체 높이, 가운데 정렬 */}
            <Row>
                <Col>
                    {/* 404 이미지나 아이콘 */}
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                        alt="Not Found"
                        width={150}
                        className="mb-4 img-fluid"  // ✅ img-fluid 추가로 반응형 크기 자동 조정
                        style={{ maxWidth: "180px" }} // 너무 커지지 않게 제한
                    />

                    {/* 제목 */}
                    <h1 className="fw-bold mb-3">404 - Page Not Found</h1>

                    {/* 부가 설명 */}
                    <p className="text-muted mb-4">
                        요청하신 페이지를 찾을 수 없습니다. <br />
                        주소를 확인하시거나 홈으로 돌아가주세요.
                    </p>

                    {/* 홈으로 이동 버튼 */}
                    <Button
                        variant="primary"
                        onClick={() => navigate('/')}
                    >
                        홈으로 돌아가기
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
