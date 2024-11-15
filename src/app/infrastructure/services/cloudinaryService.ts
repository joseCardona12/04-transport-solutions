import { PCloudinary } from "@/app/core/application/ports";
import { HttpClientUtilForm } from "../utils";
import { ICloudinaryRequest, ICloudinaryResponseError, ICloudinaryResponseSuccess } from "@/app/core/application/dtos/clouDinary";

class CloudDinaryService implements PCloudinary{
    private httpClientUtil:HttpClientUtilForm;

    constructor(){
        this.httpClientUtil = new HttpClientUtilForm("https://api.cloudinary.com/v1_1/db6xfy8st/image/upload");
    }

    async postImage(request: FormData): Promise<ICloudinaryResponseError | ICloudinaryResponseSuccess> {
        const data = await this.httpClientUtil.postImage<ICloudinaryResponseError | ICloudinaryResponseSuccess>(request);
        return data;
    }
}