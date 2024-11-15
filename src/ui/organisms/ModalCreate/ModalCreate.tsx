"use client";

import { Button, UpFile } from "@/ui/atoms";
import GroupInputFilter from "@/ui/molecules/GroupInputFIlter/GroupInputFilter";
import "./modalCreateStyles.scss";
import { ButtonUpFile } from "@/ui/molecules";
import { IVehicleRequestCreate } from "@/app/core/application/dtos/vehicles";
import { useState } from "react";
import { useImageState } from "@/app/core/application/global-state";


export default function ModalCreate():React.ReactNode{
    const initialForm: IVehicleRequestCreate = {
        file:"",
        make: "",
        licensePlate: "",
        model: "",
        year: ""
    }

    const [formData, setFormData] = useState<IVehicleRequestCreate>(initialForm);
    const {url_image, setUrlImage} = useImageState((state)=>state);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = ():void =>{
        console.log(url_image)
    }
    
    return (
        <div className="content-modal-create">
            <div className="create-header">
                <h3 className="header-title">Agregar nuevo vehiculo</h3>
                <div className="closeModal"></div>
            </div>
            <div className="create-body">
                <div className="body-upFile">
                    <UpFile
                        image_url={url_image ? url_image : "/images/imageDefault.webp"}
                    />  
                    <ButtonUpFile />
                </div>
                <form className="body-inputs">
                    <GroupInputFilter
                        label="Marca"
                        name="make"
                        value={formData.make!}
                        onChange={(e)=> handleChange(e)}
                        placeholder="Ingresa la marca"
                    />
                    <GroupInputFilter
                        label="Modelo"
                        name="model"
                        value={formData.model!}
                        onChange={(e)=> handleChange(e)}
                        placeholder="Ingresa el modelo"
                    />
                    <GroupInputFilter
                        label="Año"
                        name="year"
                        value={formData.year!}
                        onChange={(e)=> handleChange(e)}
                        placeholder="Ingresa el año"
                    />
                    <GroupInputFilter
                        label="Placa"
                        name="licensePlate"
                        value={formData.licensePlate!}
                        onChange={(e)=> handleChange(e)}
                        placeholder="Ingresa la placa"
                    />
                </form>
            </div>
            <hr className="line-modal-create" />
            <div className="create-footer" onClick={()=>console.log("cancel")}>
                <Button width="50%">
                    Cancelar
                </Button>
                <Button width="50%" onClick={handleSubmit}>
                    Agregar
                </Button>
            </div>
        </div>
    )
}