"use client";

import { IconEdit, IconTime, IconTrash } from "@/assets/icons";
import "./tableStyles.scss";
import { useOpenModalState, useVehicleIdState, useVehicleState } from "@/app/core/application/global-state";
import { IVehicle } from "@/app/core/application/dtos/vehicles";
import { VehicleService } from "@/app/infrastructure/services";

interface ITableProps {
    columns: string[],
    rows?: string[],
}
export default function Table({
    columns = [],
    
}: ITableProps):React.ReactNode {
    const {vehicles} = useVehicleState((state)=>state);
    const {setOpenModal} = useOpenModalState((state)=>state); 
    const {setId} = useVehicleIdState((state)=>state);

    const handleDeleteVehicle = async(id:number):Promise<void> =>{
        setOpenModal({
            state: true,
            type: "MODAL_DELETE"
        });
        setId(id);
    }
    return (
        <div className="content-table">
            <table>
                <thead>
                    <tr>
                        {columns.map((column:string, index:number) =>(
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                        
                </thead>
                <tbody>
                    {vehicles   
                    ?
                    vehicles.map((vehicle:IVehicle, index:number)=>(
                        <tr key={index}>
                            <td className="image-vehicle">
                                <img src={vehicle.photo} alt="photo" />
                            </td>
                            <td>{vehicle.make}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.year}</td>
                            <td>{vehicle.licensePlate}</td>
                            <td className="content-icons">
                                <div className="icons">
                                    <IconEdit />
                                    <IconTime />
                                    <IconTrash onClick={()=>handleDeleteVehicle(vehicle.id)} />
                                </div>
                            </td>
                        </tr>
                    ))
                    : 
                    <tr>
                        <th>There are not vehicles...</th>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}