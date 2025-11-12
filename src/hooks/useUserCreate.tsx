import { toast } from "react-toastify";

export const useUserCreate = () => {
    const userCreateApplication = async (name: string, email: string, password: string) => {
        if (!name.trim()) return toast("이름을 적어주세요.");
        if (!email.trim()) return toast("이메일을 적어주세요.");
        if (!password.trim()) return toast("비밀번호를 작성해주세요.");

        try {
            const res = await fetch("http://localhost:8080/user/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userName: name,
                    userId: email,
                    userPw: password,
                }),
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
            toast("회원가입 중 오류가 발생했습니다.");
        }
    };

    return { userCreateApplication };
};
