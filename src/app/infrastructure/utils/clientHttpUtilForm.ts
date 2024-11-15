const defaultBaseUrl = "https://maintenancesystembc-production.up.railway.app/api/v1";

export default class HttpClientUtilForm{
    private baseUrl: string;

    constructor(baseUrl?: string) {
      this.baseUrl = baseUrl || defaultBaseUrl;
    }

    private async manageResponse(response:Response){
        if(!response.ok){
            throw new Error("Error with the method manageResponse")
        }
        return await response.json();
    }

    async post<T, B>(url:string, request:T):Promise<B>{
        const response = await fetch(`${this.baseUrl}/${url}`, {
            method: "POST",
            body: JSON.stringify(request)
        });
        return await this.manageResponse(response);
    }

    async update<T,B>(url:string, request:T):Promise<B>{
        const response = await fetch(`${this.baseUrl}/${url}`,{
            method: "PUT",
            body: JSON.stringify(request)
        });
        return await this.manageResponse(response);
    }
}