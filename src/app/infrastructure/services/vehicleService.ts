import { IVehicleRequest, IVehicleResponse } from "@/app/core/application/dtos/vehicles";
import { PVehicles } from "@/app/core/application/ports/vehicles/vehiclePort";
import HttpClient from "../utils/clientHttpUtil";

class VehicleService implements PVehicles {
    private httpClientUtil:HttpClient;

    constructor() {
        this.httpClientUtil = new HttpClient();
    }
    async getVehicles(): Promise<IVehicleResponse> {
        const data = await this.httpClientUtil.get<IVehicleResponse>(``);
        return data;
    }

    async getVehiclesByFilter(filter: string): Promise<IVehicleResponse> {
        const data = await this.httpClientUtil.get<IVehicleResponse>(`${filter}`);
        return data;
    }
}

export default new VehicleService();