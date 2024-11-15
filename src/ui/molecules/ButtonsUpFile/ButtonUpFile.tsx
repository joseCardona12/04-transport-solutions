"use client";
import { Button, Input, inputAlert } from "@/ui/atoms";
import "./buttonUpFileStyles.scss";
import { useState } from "react";
import { ICloudinaryResponseError, ICloudinaryResponseSuccess } from "@/app/core/application/dtos/clouDinary";
import { CloudinaryService } from "@/app/infrastructure/services";
import { useImageState } from "@/app/core/application/global-state";

export default function ButtonUpFile():React.ReactNode{
    const {url_image,setUrlImage} = useImageState((state)=>state);

    const handleLoad = async(e:React.ChangeEvent<HTMLInputElement>):Promise<void> => {
        const element = e.target.files;
        const formImage = new FormData();
        if(!element){
            console.log({message: "Error to load image"});
            return;
        }
        formImage.append("file",element[0]);
        formImage.append("upload_preset", "next_image_cloud");
        const data: ICloudinaryResponseError | ICloudinaryResponseSuccess = await CloudinaryService.postImage(formImage);
        
        if((data as ICloudinaryResponseError).error){
            inputAlert((data as ICloudinaryResponseError).error.message, "error");
            return;
        }
        const {url} = data as ICloudinaryResponseSuccess;
        setUrlImage(url);
        inputAlert("Success. The image load correctly", "success");
    }
    const handleCancel = ():void =>{
        setUrlImage("");
    }
    return (
        <div className="content-buttonsUpFile">
            <div className="buttonsUpFile">
                <Input
                    type="file"
                    className="buttonLoad"
                    onChange={(e)=>handleLoad(e)}
                />
                <Button onClick={handleCancel}>
                    Cancelar
                </Button>
            </div>
            <p className="buttonsUpFile-text">
                Solo se aceptan archivos en formato jpg, png, svg
            </p>
        </div>
    )
}