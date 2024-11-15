import { NumberPagination } from "@/ui/atoms";
import "./paginationStyles.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { useMetaDataState } from "@/app/core/application/global-state";

export default function Pagination():React.ReactNode{
    const router = useRouter();
    const searchParams = useSearchParams();
    const {metaData, setMetadata} = useMetaDataState((state)=>state);

    const handleChangePage = (page:number):void =>{
        setMetadata({...metaData, currentPage: page});
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        router.push(`/dashboard?${params.toString()}`);
    }

    return (
        <div className="content-pagination">
            <NumberPagination number={1} onCLick={()=>handleChangePage(1)} />
            <NumberPagination number={2} onCLick={()=>handleChangePage(2)} />
            <NumberPagination number={3} onCLick={()=>handleChangePage(3)} />
            <NumberPagination number={4} onCLick={()=>handleChangePage(4)} />
        </div>
    )
}