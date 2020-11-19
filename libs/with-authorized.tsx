import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

const withAuthorized = (Component: any) => {
    return (props: any) => {
        const router = useRouter();
        const [loggedIn, setLoggedIn] = useState(false);
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            const loginWithToken = async () => {
                const token = localStorage.getItem("token")
                if (!token) {
                    router.push({
                        pathname: "/login",
                        query: {
                            redirect: router.route
                        }
                    })
                    return
                }
                const res = await fetch("http://localhost:3000/api/me", {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    }
                })
                if (res.status === 200) {
                    const data = await res.json()
                    console.log(data);
                    setLoggedIn(true);
                    setLoading(false);
                } else {
                    console.log(res);
                    setLoggedIn(false)
                    setLoading(false);
                }
            }

            loginWithToken();
        }, []);

        if (loading)
            return <h1>Loading...</h1>

        if (!loggedIn)
            return <h1>You need Login</h1>

        return <Component {...props} />
    }
}

export default withAuthorized;