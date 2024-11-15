import { IconEdit, IconTime, IconTrash } from "@/assets/icons";
import "./tableStyles.scss";

interface ITableProps {
    columns: string[],
    rows?: string[],
}
export default function Table({
    columns
}: ITableProps):React.ReactNode {
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
                    <tr>
                        <td>123456</td>
                        <td>2021</td>
                        <td>Audi</td>
                        <td>A4</td>
                        <td>d</td>
                        <td className="content-icons">
                            <div className="icons">
                                <IconEdit />
                                <IconTime />
                                <IconTrash />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}