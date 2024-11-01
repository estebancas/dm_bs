'use client'

import LoginForm from "@/components/login-form";
import { fakeAuth } from "@/lib/auth";
import { login, User } from "@/store/user";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";



export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch()

    const handleLogin = async (user: User) => {

        const userDate = {
            name: user.name!,
            email: user.email!
        }

        const res = await fakeAuth.login(userDate)

        if (res) {
            dispatch(login(res))
            router.push("/home");
        }
    }

    return (
        <LoginForm
            onLogin={handleLogin}
        />
    )
}
