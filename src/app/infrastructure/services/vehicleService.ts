import { IVehicleRequest, IVehicleRequestPagination, IVehicleResponse } from "@/app/core/application/dtos/vehicles";
import { PVehicles } from "@/app/core/application/ports/vehicles/vehiclePort";
import HttpClient from "../utils/clientHttpUtil";

class VehicleService implements PVehicles {
    private httpClientUtil:HttpClient;

    constructor() {
        this.httpClientUtil = new HttpClient();
    }
    async getVehicles({page,size}: IVehicleRequestPagination): Promise<IVehicleResponse> {
        console.log(page,size)
        const data = await this.httpClientUtil.get<IVehicleResponse>(`vehicles?page=${page}&size=${size}`);
        return data;
    }

    async getVehiclesByFilter(filter: string): Promise<IVehicleResponse> {
        const data = await this.httpClientUtil.get<IVehicleResponse>(`${filter}`);
        console.log("data",data);
        return data;
    }

    async deleteVehicle(id: string): Promise<void> {
        console.log("from backend", id)
        const data = await this.httpClientUtil.delete<void>(`vehicles/${id}`);
        console.log("dadsadasdasd",data);
        return data;
    }
}

export default new VehicleService();