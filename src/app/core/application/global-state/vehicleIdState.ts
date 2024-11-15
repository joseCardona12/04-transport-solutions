
import { create } from "zustand";

interface IVehicleState {
    id: string | number,
    setId: (value: string | number) => void
}

export const useVehicleIdState = create<IVehicleState>((set)=>({
    id: 0,
    setId: (value) => set(state => ({...state, id: value })),
}))