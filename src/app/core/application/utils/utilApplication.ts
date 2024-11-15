import { Filter } from "@/ui/organisms";
import { IVehicleRequest } from "../dtos/vehicles";


class UtilApplication{
    
    separateName(email:string):string{
        const arrayName: string[] = email.split("@");
        return arrayName[0];
    };

    verifyExists(...values: (number | string | undefined)[]):boolean{
        return values.every((value)=>value);
    };
    buildParams(filters: Record<string,string>):string{
        const params = new URLSearchParams();

        Object.keys(filters).forEach(key=>{
            const value = filters[key];
            if(value != null && value !== ""){
                params.append(key,value)
            };
        });
        return params.toString();
    }

}


export default new UtilApplication();