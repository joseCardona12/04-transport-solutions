
export interface ILoginResponse {
    statusCode:number,
    message:string,
    data: ILoginResponseData
}

export interface ILoginResponseData {
    access_token:string,
    user: ILoginResponseDataUser
}

export interface ILoginResponseDataUser {
    email:string,
    id:number
}