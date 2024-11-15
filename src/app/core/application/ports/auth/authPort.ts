import { ILoginResponse } from "../../dtos/auth";
import { ILoginRequest } from "../../dtos/auth/loginRequestDto";


export default interface PAuth {
    login(request: ILoginRequest):Promise<ILoginResponse>
}