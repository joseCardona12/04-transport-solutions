import { ILoginResponse, IRegisterRequest } from "../../dtos/auth";
import { ILoginRequest } from "../../dtos/auth/loginRequestDto";


export default interface PAuth {
    /**
     * 
     * @param request is an object that contains all properties for login a user
     * @returns 
     */
    login(request: ILoginRequest):Promise<ILoginResponse>

    /**
     * 
     * @param request is an object that contains all properties for regiter a user
     */
    register(request: IRegisterRequest):Promise<ILoginResponse>
}