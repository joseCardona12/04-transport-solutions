import { IResponseError } from "../../dtos/reponseDto";
import { IVehicleRequest, IVehicleRequestCreate, IVehicleRequestPagination, IVehicleResponse } from "../../dtos/vehicles";

export interface PVehicles {
    /**
     * Gets all vehicles without pagination or filters.
     *
     * @method
     * @param pagination - **Required**. An object with the properties `page` and `size` for pagination.
     *   - `page`: the current page number.
     *   - `size`: the number of items per page.
     * @returns A promise that resolves to a list of vehicles.
     */
    getVehicles({page,size}:IVehicleRequestPagination): Promise<IVehicleResponse>

    /**
     * Get vehicles for filter that user choose and the system send for query params
     * @method
     * @param filter - **Required**. A filter that is a string
     * @returns A a list with all vehicles that match with the filter
     * @Example  `marke=CHEVROLET`. The filter to be a string, we can create a string complete for many filters using
     * **(&)** for separate the filter
     *  @Example `marke=CHEVROLET&model=2022`
     * 
     */
    getVehiclesByFilter(filter:string): Promise<IVehicleResponse>

    /**
     * Create a new vehicle
     * @Method
     * @param request This is an object that contains all properties for create a new vehicle 
     * @Example 
     * `{marke: "CHEVROLET",model: 2024}`
     */
    createVehicle(request:IVehicleRequestCreate):Promise<{} | IResponseError>

    /**
     * Update a vehicle 
     * @Method
     * @param request This is a obejct with all properties for update a vehicle 
     * @param id This is a param very **important** for update only vehicle that match with the param **id**
     * @returns 
     */
    updateVehicle(request: IVehicleRequestCreate, id:number | string):Promise<{} | IResponseError | {message:string}>


    /**
     * Delete a vehicle
     * @param id This is a param very **important** for delete only vehicle that match with the param **id**
     * @returns
     */
    deleteVehicle(id:string): Promise<void>
}