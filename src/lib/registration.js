import { toast } from "react-toastify";
import { saveToSessionStorage } from "./sessionstorage";
import { baseUrl } from "@/constants/baseUrl";

export const onSubmit = async (data, setLoading, router, reset) => {

    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
    const rand = Math.floor(min + Math.random() * (max - min + 1));
    const otpNumber = Math.trunc(rand);
    const otp = btoa(otpNumber);
    setLoading(true)
    saveToSessionStorage("random", otp)
    saveToSessionStorage("isUserReg", data)

    const url = `${process.env.NEXT_PUBLIC_API_URL_V2}/user/registration/check`;

    const registerData = {
        email_or_phone: data?.email_or_phone,
        code: otpNumber
    };

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(registerData),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(url, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(res => {
            if (res.status) {
                reset();
                router.push('/otp-verify', { scroll: false })
            }else{
                const err = res?.errors || {};
                const inputError = err?.email_or_phone && err?.email_or_phone[0];
                if(inputError){
                    toast(inputError, { type: 'error' })
                }else{
                    toast(res.message, { type: 'error' })
                }
                setLoading(false)
            }
        })
        .catch((error) => {
            // console.error(error, "error");
            setLoading(false)
        });
}
