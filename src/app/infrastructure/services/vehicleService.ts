import { IVehicleRequest, IVehicleRequestCreate, IVehicleRequestPagination, IVehicleResponse } from "@/app/core/application/dtos/vehicles";
import { PVehicles } from "@/app/core/application/ports/vehicles/vehiclePort";
import HttpClient from "../utils/clientHttpUtil";
import { HttpClientUtilForm } from "../utils";
import { IResponseError } from "@/app/core/application/dtos/reponseDto";

/** Service for Vehicle that implements the **Port** `PVehicles` for get a contract 
 * @class 
 * @methods  `getVehicles, getVehiclesByFilter, createVehicle, updateVehicle deleteVehicle`
 */
class VehicleService implements PVehicles {
    private httpClientUtil:HttpClient;
    private httpClientUtilFormData: HttpClientUtilForm;

    constructor() {
        this.httpClientUtil = new HttpClient();
        this.httpClientUtilFormData = new HttpClientUtilForm();
    }
    async getVehicles({page,size}: IVehicleRequestPagination): Promise<IVehicleResponse> {
        console.log(page,size)
        const data = await this.httpClientUtil.get<IVehicleResponse>(`vehicles?page=${page}&size=${size}`);
        return data;
    }

    async getVehiclesByFilter(filter: string | undefined): Promise<IVehicleResponse> {
        const data = await this.httpClientUtil.get<IVehicleResponse>(`vehicles?${filter}`);
        console.log("data",data);
        return data;
    }

    async getVehicleById(id: string): Promise<IVehicleResponse | IResponseError> {
        const data = await this.httpClientUtil.get<IVehicleResponse>(`vehicles/${id}`);
        return data;
    }

    async createVehicle(request: IVehicleRequestCreate):Promise<{}| IResponseError>{
        const data = await this.httpClientUtilFormData.post<IVehicleRequestCreate, {}>("vehicles", request);
        return data;
    }

    async updateVehicle(request:IVehicleRequestCreate, id: number | string):Promise<{} | IResponseError | {message:string}>{
        if(!id){
            return ({message:"Error, is required id for update vehicle"});
        }
        const data = await this.httpClientUtilFormData.update<IVehicleRequestCreate, {}>(`vehicles/${id}`, request);
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