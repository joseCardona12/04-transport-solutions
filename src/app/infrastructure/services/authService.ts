import { PAuth } from "@/app/core/application/ports";
import { ClientHttpUtil } from "../utils";
import { ILoginResponse, IRegisterRequest } from "@/app/core/application/dtos/auth";
import { ILoginRequest } from "@/app/core/application/dtos/auth/loginRequestDto";

export default class AuthService implements PAuth {
    private clientHttpUtil:ClientHttpUtil;
    private basePath:string = "auth";

    constructor(){
        this.clientHttpUtil = new ClientHttpUtil();
    }

    async login(request: ILoginRequest):Promise<ILoginResponse>{
        const data = await this.clientHttpUtil.post<ILoginResponse, ILoginRequest>(`${this.basePath}/login`, request);
        return data;
    }

    async register(request: IRegisterRequest): Promise<ILoginResponse> {
        const data = await this.clientHttpUtil.post<ILoginResponse, IRegisterRequest>(`${this.basePath}/register`, request);
        return data;
    }
}