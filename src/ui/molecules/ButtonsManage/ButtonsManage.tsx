import { IconAdd, IconExcel } from "@/assets/icons";
import { Button } from "@/ui/atoms";
import "./buttonManageStyles.scss";

export default function ButtonsManage():React.ReactNode{
    return (
        <div className="buttons-manage">
            <Button background_color="var(--color-blue)">
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