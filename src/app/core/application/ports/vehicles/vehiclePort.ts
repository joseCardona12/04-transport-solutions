import { IVehicleRequest, IVehicleResponse } from "../../dtos/vehicles";

export interface PVehicles {
    getVehicles(): Promise<IVehicleResponse>
    getVehiclesByFilter(filter:string): Promise<IVehicleResponse>
}