export interface IVehicleResponse {
    statusCode:number,
    message:string,
    data: IVehicle[],
    metadata:IVehicleMetadata
}

export interface IVehicle {
    id:number,
    make:string,
    model:string,
    year:number,
    licensePlate:string,
    photo:string,
}

export interface IVehicleMetadata {
    totalPages:number,
    currentPage:number,
    pageSize:number,
    totalRecords:number,
    sortField:string,
}

export interface IVehicleResponseCreate{
    
}