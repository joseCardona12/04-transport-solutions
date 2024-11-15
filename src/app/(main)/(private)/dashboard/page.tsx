import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IVehicleResponse } from "@/app/core/application/dtos/vehicles";
import { IUserLogged } from "@/app/core/application/interfaces";
import { VehicleService } from "@/app/infrastructure/services";
import SectionDashboard from "@/ui/templates/SectionDashboard/SectionDashboard";
import { getServerSession } from "next-auth/next";

interface IDashboardViewProps{
    searchParams: {
        page: string,
        totalPages:string,
        name:string
    }
}

const generateMetadata = async({searchParams}: IDashboardViewProps) =>{
    const page:number = parseInt(searchParams.page) | 1;
    return {
        title: `Dashboard ${page}`,
        description: "Dashboard"
    }
}

export default async function DashboardView({searchParams}:IDashboardViewProps){
    const page:number = searchParams.page ? parseInt(searchParams.page) : 1;
    const size: number = searchParams.totalPages ?  parseInt(searchParams.totalPages) : 6;

    const vehicles: IVehicleResponse = await VehicleService.getVehicles();
    console.log(vehicles);
    
    return (
        <SectionDashboard />
    )
}   