import { SectionTitle } from "@/ui/atoms";
import { Filter, Table } from "@/ui/organisms";
import "./sectionDashboardStyles.scss";
import { ButtonsManage } from "@/ui/molecules";
import Pagination from "@/ui/molecules/Pagination/Pagination";

export default function SectionDashboard():React.ReactNode{
    return (
        <section className="dashboard-section">
            <SectionTitle
                sectionTitle="Gestiòn de vehiculos"
            />
            <Filter />
            <ButtonsManage />
            <Table
                columns={["Foto", "Marca", "Modelo", "Año", "Placa", "Acciones"]}
            />
            <Pagination />
        </section>
    )
}