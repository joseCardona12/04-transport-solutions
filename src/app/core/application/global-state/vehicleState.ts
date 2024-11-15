
import { create } from "zustand";
import { IUserLogged } from "../interfaces";
import { IVehicle } from "../dtos/vehicles";

interface IVehiclesState {
    vehicles: IVehicle[],
    setVehicles: (vehicle: IVehicle[]) => void
}

export const useVehicleState = create<IVehiclesState>((set)=>({
    vehicles: [],
    setVehicles: (vehicles: IVehicle[]) => set(state => ({...state, vehicles })),
}))