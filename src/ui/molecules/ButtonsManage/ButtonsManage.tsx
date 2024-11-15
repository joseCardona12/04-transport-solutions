import { IconAdd, IconExcel } from "@/assets/icons";
import { Button } from "@/ui/atoms";
import "./buttonManageStyles.scss";
import { useOpenModalState } from "@/app/core/application/global-state";

export default function ButtonsManage():React.ReactNode{

    const {setOpenModal} = useOpenModalState((state)=>state);

    const handleOpenModalCreate = ():void => {
        setOpenModal({
            state: true,
            type: "MODAL_CREATE"
        })
    }
    return (
        <div className="buttons-manage">
            <Button background_color="var(--color-blue)" onClick={handleOpenModalCreate}>
                <IconAdd />
                Agregar Vehìculo
            </Button>
            <Button background_color="var(--color-green)">
                <IconExcel />
                Descargar reporte
            </Button>
        </div>
    )
}