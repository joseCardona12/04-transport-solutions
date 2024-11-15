import { create } from "zustand";
import { IVehicleMetadata } from "../dtos/vehicles";


interface IMetadataState  {
    metaData: IVehicleMetadata,
    setMetadata: (value: IVehicleMetadata) => void
}

export const useMetaDataState = create<IMetadataState>((set)=>({
    metaData: {
        totalPages:0,
        currentPage:0,
        pageSize:0,
        totalRecords:0,
        sortField:"",
    },
    setMetadata: (value) => set(state => ({...state, metaData: value })),
}))