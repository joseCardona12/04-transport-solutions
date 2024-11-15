
import "./numberPaginationStyles.scss";


interface INumberPagingationProps {
    number:number,
    backgroundColor?:string,
    onCLick?:() => void
}
export default function NumberPagination({number, backgroundColor, onCLick}:  INumberPagingationProps): React.ReactNode{
    return (
        <div className="content-number" style={{backgroundColor:backgroundColor}} onClick={onCLick}>
            <p>{number}</p>
        </div>
    )
}