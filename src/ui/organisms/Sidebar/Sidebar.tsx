import { Avatar } from "@/ui/atoms";
import Identify from "@/ui/atoms/Identify/Identify";
import { Navbar } from "@/ui/molecules";
import "./sidebarStyles.scss";

interface ISidebarProps {
    name_user?:string,
}

export default function Sidebar({
    name_user
}:ISidebarProps):React.ReactNode{
    return (
        <div className="sidebar">
            <Identify 
                icon={<img src="/icons/identifyIcon.svg" alt="identifyIcon" />}
                logoText="Transport Solutions"
                className="content-identify-dashboard"
            />
            <hr />
            <Avatar
                name={"Kevin Mejìa"}
                icon={<img src="/icons/userIcon.svg" alt="userIcon" />}
            />
            <Navbar />
        </div>
    )
}