import { ItemNavbar } from "@/ui/atoms";
import "./navbarStyles.scss";

export default function Navbar():React.ReactNode{

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <ItemNavbar
                    url_item="/vehicles"
                    label_item="Vehìculos"
                    icon_item={<img src="/icons/cartFillIcon.svg" alt="cartFIllIcon" />}   
                    background_color="var(--background-color-secondary)"
                    color="var(--color-blue)"
                />

                <ItemNavbar
                    url_item="/logout"
                    label_item="Cerrar sesiòn"
                    icon_item={<img src="/icons/logoutIcon.svg" alt="logOutIcon" />} 
                    background_color="var(--background-color-white)"
                />
            </ul>
        </nav>
    )
}