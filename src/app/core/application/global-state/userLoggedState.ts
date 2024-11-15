
import { create } from "zustand";
import { IUserLogged } from "../interfaces";

interface IUserLoggedState {
    user: IUserLogged,
    setUser: (user: IUserLogged) => void
}

export const useUserLoggedState = create<IUserLoggedState>((set)=>({
    user: {
        id: "0",
        name: "",
        email: "",
        token: "",
    },
    setUser: (user: IUserLogged) => set(state => ({...state, user })),
}))