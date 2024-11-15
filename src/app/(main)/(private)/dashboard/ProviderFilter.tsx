"use client";

import { useOpenModalState } from "@/app/core/application/global-state";
import Cookies from "js-cookie";

interface IProviderFilters {
    children: React.ReactNode
}

export default function ProviderFilters({children}:IProviderFilters):React.ReactNode{
    const {setOpenModal} = useOpenModalState((state)=>state);
    const filtersState = Cookies.get("filters");

    if(filtersState){
        setTimeout(()=> {
            setOpenModal({
                state: false,
                type: "MODAL_LOADING"
            })
        }, 5000)
    }
    return(
        <>
        {children}
        </>
    )
}