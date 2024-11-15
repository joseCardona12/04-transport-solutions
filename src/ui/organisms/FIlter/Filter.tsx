"use client";

import { IconDelete, IconFilter } from "@/assets/icons";
import { Button } from "@/ui/atoms";
import GroupInputFilter from "@/ui/molecules/GroupInputFIlter/GroupInputFilter";
import "./filterStyles.scss";
import { useState } from "react";
import { IVehicleRequest } from "@/app/core/application/dtos/vehicles";
import { UtilApplication } from "@/app/core/application/utils";
import { VehicleService } from "@/app/infrastructure/services";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useOpenModalState } from "@/app/core/application/global-state";

export default function Filter():React.ReactNode{
    const filterDataInitial: Partial<IVehicleRequest> = {
        licensePlate: "",
        make: "",
        model: "",
        year: ""
    }
    const [filterData, setFilterData] = useState<Partial<IVehicleRequest>>(filterDataInitial);
    const searchParams = useSearchParams();
    const router = useRouter();
    const {setOpenModal} = useOpenModalState((state)=>state);


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setFilterData({
            ...filterData,
            [name]: value
        });
    }

    const handleSearch = ():void => {
        const paramsBuild = UtilApplication.buildParams(filterData);
        Cookies.set("filters", paramsBuild);
        setOpenModal({
            state: true,
            type: "MODAL_LOADING"
        });
    }
    return (
        <div className="content-filter">
            <div className="filters">
                <GroupInputFilter
                    label="Placa"
                    onChange={(e)=>handleChange(e)}
                    name="licensePlate"
                    value={filterData.licensePlate!}
                />
                <GroupInputFilter
                    label="Año"
                    onChange={(e)=>handleChange(e)}
                    name="year"
                    value={filterData.year!}
                />
                <GroupInputFilter
                    label="Marca"
                    onChange={(e)=>handleChange(e)}
                    name="make"
                    value={filterData.make!}
                />
                <GroupInputFilter
                    label="Modelo"
                    onChange={(e)=>handleChange(e)}
                    name="model"
                    value={filterData.model!}
                />
            </div>
            <div className="filter-buttons">
                <Button onClick={handleSearch}>
                    <IconFilter />
                    Buscar
                </Button>
                <Button>    
                    <IconDelete />
                    Limpiar
                </Button>
            </div>
        </div>
    )
}