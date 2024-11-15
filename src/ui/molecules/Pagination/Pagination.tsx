import { NumberPagination } from "@/ui/atoms";
import "./paginationStyles.scss";

export default function Pagination():React.ReactNode{
    return (
        <div className="content-pagination">
            <NumberPagination number={1} />
            <NumberPagination number={2} />
            <NumberPagination number={3} />
            <NumberPagination number={4} />
        </div>
    )
}