import { create } from "zustand";
import { IVehicleMetadata } from "../dtos/vehicles";


interface IImageState  {
    url_image: string,
    setUrlImage: (value: string) => void
}

export const useImageState = create<IImageState>((set)=>({
    url_image: "",
    setUrlImage: (value) => set(state => ({...state, url_image: value })),
}))