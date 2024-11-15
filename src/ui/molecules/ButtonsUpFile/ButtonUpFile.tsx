"use client";
import { Button, Input } from "@/ui/atoms";
import "./buttonUpFileStyles.scss";
import { useState } from "react";


interface File {
    lastModified:number,
    lastModifiedDate: Date,
    name: string,
    size:number,
    type: string,
    webkitRelativePath: ""
}

interface FileList {
    file: File,
    length: number
}

export default function ButtonUpFile():React.ReactNode{

    const [image,setImage] = useState<string | ArrayBuffer | null>(null);

    const handleLoad = (e:React.ChangeEvent<HTMLInputElement>):void => {
        const element = e.target.files;
        if(!element){
            console.log({message: "Error to load image"});
            return;
        }
        setImage(element[0].name);
        console.log(image);
    }
    const handleCancel = ():void =>{

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