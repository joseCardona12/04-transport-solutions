import { Button, UpFile } from "@/ui/atoms";
import GroupInputFilter from "@/ui/molecules/GroupInputFIlter/GroupInputFilter";
import "./modalCreateStyles.scss";
import { ButtonUpFile } from "@/ui/molecules";


export default function ModalCreate():React.ReactNode{
    return (
        <div className="content-modal-create">
            <div className="create-header">
                <h3 className="header-title">Agregar nuevo vehiculo</h3>
                <div className="closeModal"></div>
            </div>
            <div className="create-body">
                <div className="body-upFile">
                    <UpFile
                        image_url="/images/imageDefault.webp"
                    />  
                    <ButtonUpFile />
                </div>
                <div className="body-inputs">
                    <GroupInputFilter
                        label="Marca"
                        name="mark"
                        value=""
                        onChange={(e)=>console.log(e)}
                        placeholder="Ingresa la marca"
                    />
                    <GroupInputFilter
                        label="Modelo"
                        name="model"
                        value=""
                        onChange={(e)=>console.log(e)}
                        placeholder="Ingresa el modelo"
                    />
                    <GroupInputFilter
                        label="Año"
                        name="year"
                        value=""
                        onChange={(e)=>console.log(e)}
                        placeholder="Ingresa el año"
                    />
                    <GroupInputFilter
                        label="Placa"
                        name="licensePlate"
                        value=""
                        onChange={(e)=>console.log(e)}
                        placeholder="Ingresa la placa"
                    />
                </div>
            </div>
            <hr className="line-modal-create" />
            <div className="create-footer">
                <Button>
                    Cancelar
                </Button>
                <Button background_color="var(--background-color-blue)">
                    Agregar
                </Button>
            </div>
        </div>
    )
}