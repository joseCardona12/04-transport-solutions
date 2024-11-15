import { Button } from "@/ui/atoms";
import "./buttonUpFileStyles.scss";

export default function ButtonUpFile():React.ReactNode{

    const handleLoad = ():void => {

    }
    const handleCancel = ():void =>{

    }
    return (
        <div className="content-buttonsUpFile">
            <div className="buttonsUpFile">
                <Button onClick={handleLoad}>
                    Cargar
                </Button>
                <Button onClick={handleCancel}>
                    Cancelar
                </Button>
            </div>
            <p className="buttonsUpFile-text">
                Solo se aceptan archivos en formato jpg, png, svg
            </p>
        </div>
    )
}