
import { create } from "zustand";
import { IUserLogged } from "../interfaces";

interface IOpenModalState {
    openModal: boolean,
    setOpenModal: (value: boolean) => void
}

export const useOpenModalState = create<IOpenModalState>((set)=>({
    openModal: false,
    setOpenModal: (value) => set(state => ({...state, openModal: value })),
}))