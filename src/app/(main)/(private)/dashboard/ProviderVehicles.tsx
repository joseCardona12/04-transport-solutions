"use client";

import { IVehicle, IVehicleMetadata } from "@/app/core/application/dtos/vehicles";
import { useMetaDataState, useVehicleState } from "@/app/core/application/global-state";
import { useEffect } from "react";

interface IProviderVehiclesProps {
    vehicles: IVehicle[],
    metaData: IVehicleMetadata,
    children: React.ReactNode
}

export default function ProviderVehicles({vehicles, children, metaData}:IProviderVehiclesProps):React.ReactNode{
    const {setVehicles} = useVehicleState((state) =>state);
    const {setMetadata} = useMetaDataState((state)=>state)

    useEffect(()=>{
        setVehicles(vehicles)
        setMetadata(metaData)
    }, [vehicles,])
    return(
        <>
        {children}
        </>
    )
}