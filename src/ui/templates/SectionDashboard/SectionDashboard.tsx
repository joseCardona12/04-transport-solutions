"use client";

import { ModalLoading, SectionTitle } from "@/ui/atoms";
import { Filter, ModalCreate, Table } from "@/ui/organisms";
import "./sectionDashboardStyles.scss";
import { ButtonsManage } from "@/ui/molecules";
import Pagination from "@/ui/molecules/Pagination/Pagination";
import ModalDelete from "@/ui/molecules/ModalDelete/ModalDelete";
import { useOpenModalState } from "@/app/core/application/global-state";

export default function SectionDashboard():React.ReactNode{
    const {openModal} = useOpenModalState((state)=>state); 
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
            {openModal.state && openModal.type === "MODAL_DELETE" && <ModalDelete />}
            {openModal.state && openModal.type === "MODAL_LOADING" && <ModalLoading text="Saving filters for get vehicles..." />}
            {openModal.state && openModal.type === "MODAL_CLEAN" && <ModalLoading text="Deleting filters..." />}
            {openModal.state && openModal.type === "MODAL_CREATE" && <ModalCreate />}
        </section>
    )
}