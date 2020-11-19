import usePersistedState from "./use-persisted-state";
import {User} from "../interfaces";
import constate from "constate";

function useStore() {
    const [user, setUser] = usePersistedState<User| null>("user",null);

    // const login = async ({ name }: any) => {
    //     const res = await fetch("http://localhost:3000/api/login", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             "name": name
    //         }),
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     if (res.status === 200) {
    //         const data = await res.json()
    //         console.log(data);
    //     } else {
    //         console.log(res);
    //     }
    // }

    return {
        user,
        setUser
    }
}

export const [StoreProvider, useStoreContext] = constate(useStore);