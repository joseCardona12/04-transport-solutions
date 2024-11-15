
export interface IVehicleRequest {
    licensePlate:string,
    page:string,
    size:string,
    year: string,
    make:string,
    model:string
}

export interface IVehicleRequestPagination {
    page: number,
    size: number
}