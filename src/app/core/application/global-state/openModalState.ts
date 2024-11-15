
import { create } from "zustand";
import { IUserLogged } from "../interfaces";

interface IOpenModalState {
    openModal: IOpenModalInformation,
    setOpenModal: (value: IOpenModalInformation) => void
}

interface IOpenModalInformation{
    state: boolean,
    type:string
}

export const useOpenModalState = create<IOpenModalState>((set)=>({
    openModal: {
        state: false,
        type: ""
    },
    setOpenModal: (value) => set(state => ({...state, openModal: value })),
}))