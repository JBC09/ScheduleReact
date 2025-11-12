import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { clearVerificationData, getRemainingSeconds } from "../utils/verificationUtils";

export const useEmailVerification = () => {
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [remainingSecond, setRemainingSecond] = useState(getRemainingSeconds());
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const sendCertificateCode = async (email: string) => {
        try {
            const res = await fetch("http://localhost:8080/user/mail/sendCode", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: email.trim(),
                    subject: "이메일 인증을 요청합니다.",
                    content: "인증번호는 180초 동안 유효합니다.",
                }),
            });

            const data = await res.json();
            if (data) {
                localStorage.setItem("preVerifiedTime", new Date().getTime().toString());
                localStorage.setItem("prevVerifiedEmail", email);
                startTimer();
                toast("인증코드를 발송하였습니다.");

            } else {
                toast("코드 발송에 실패하였습니다.");
                clearVerificationData(timerRef.current!);
                setIsEmailVerified(false);
            }
        } catch (err) {
            console.error(err);
            toast("서버 통신 오류가 발생했습니다.");
        }
    };

    const validateEmail = async (email: string, code: string) => {
        try {
            const res = await fetch("http://localhost:8080/user/mail/validate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, code }),
            });
            const data = await res.json();

            alert(data.message);
            if (data.valid) {
                clearVerificationData(timerRef.current!);
                setRemainingSecond(0);
                setIsEmailVerified(false);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const startTimer = (startSecond: number = 0) => {
        clearVerificationData(timerRef.current!);

        let remaining = 180 - startSecond;
        setRemainingSecond(remaining);
        setIsEmailVerified(true);

        timerRef.current = setInterval(() => {
            remaining--;
            setRemainingSecond(remaining);
            if (remaining <= 0) {
                clearVerificationData(timerRef.current!);
                setIsEmailVerified(false);
            }
        }, 1000);
    };

    return {
        isEmailVerified,
        remainingSecond,
        sendCertificateCode,
        validateEmail,
        startTimer,
    };
};
