// 로컬스토리지 및 타이머 관련 함수 모음
export const clearVerificationData = (timerId?: number | NodeJS.Timeout) => {
    if (timerId) clearInterval(timerId);
    localStorage.removeItem("preVerifiedTime");
    localStorage.removeItem("prevVerifiedEmail");
};

export const getRemainingSeconds = (): number => {
    const preVerifiedTime = localStorage.getItem("preVerifiedTime");
    if (!preVerifiedTime) return 0;

    const prevTime = parseInt(preVerifiedTime);
    const diffMs = new Date().getTime() - prevTime;
    const remaining = 180 - Math.floor(diffMs / 1000);

    return remaining > 0 ? remaining : 0;
};
