import { ICloudinaryRequest, ICloudinaryResponseError, ICloudinaryResponseSuccess } from "@/app/core/application/dtos/clouDinary";


export interface PCloudinary{
    postImage(request: FormData):Promise<ICloudinaryResponseError | ICloudinaryResponseSuccess>
}