import { IVehicleRequest, IVehicleRequestPagination, IVehicleResponse } from "../../dtos/vehicles";

export interface PVehicles {
    getVehicles({page,size}:IVehicleRequestPagination): Promise<IVehicleResponse>
    getVehiclesByFilter(filter:string): Promise<IVehicleResponse>
    deleteVehicle(id:string): Promise<void>
}