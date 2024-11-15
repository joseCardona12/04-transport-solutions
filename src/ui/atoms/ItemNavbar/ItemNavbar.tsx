import Link from "next/link";
import "./itemNavbarStyles.scss";

interface IItemSidebarProps {
    url_item: string,
    label_item: string,
    icon_item?: React.ReactElement,
    background_color?:string,
    color?:string
}
export default function ItemNavbar({
    url_item,
    label_item,
    icon_item,
    background_color,
    color,
}:IItemSidebarProps):React.ReactNode{
    return (
        <li className="item-sidebar">
            <div className="sidebar-icon" style={{backgroundColor:background_color}}>{icon_item}</div>
            <Link style={{color:color}} className="sidebar-link" href={url_item}>{label_item}</Link>
        </li>
    )
}