
import "./numberPaginationStyles.scss";


interface INumberPagingationProps {
    number:number,
    backgroundColor?:string
}
export default function NumberPagination({number, backgroundColor}:  INumberPagingationProps): React.ReactNode{
    return (
        <div className="content-number" style={{backgroundColor:backgroundColor}}>
            <p>{number}</p>
        </div>
    )
}