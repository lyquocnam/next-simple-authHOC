import Link from 'next/link'
import Layout from '../components/Layout'
import {useRef} from "react";
import {useRouter} from "next/router";

const LoginPage = () => {
    const router = useRouter();
    const nameRef = useRef(null);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!nameRef.current) {
            return;
        }
        // @ts-ignore
        const name = nameRef.current.value;

        const res = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify({
                "name": name
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (res.status === 200) {
            const data = await res.json()
            console.log(data);
            localStorage.setItem("token", data.token);
            if (router.query.redirect) {
                router.replace(router.query.redirect.toString());
            }
        } else {
            console.log(res);
        }
    }
    return (
        <Layout title="Login | Next.js + TypeScript Example">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} name={"name"} type="text"/>
                <p>
                    <button type={"submit"}>Login</button>
                </p>
            </form>
            <p>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </p>
        </Layout>
    )
}

export default LoginPage
