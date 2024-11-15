import { Button, inputAlert } from "@/ui/atoms";
import "./modalDeleteStyles.scss";
import { useOpenModalState, useVehicleIdState } from "@/app/core/application/global-state";
import { VehicleService } from "@/app/infrastructure/services";

export default function ModalDelete():React.ReactNode{
    const {setOpenModal} = useOpenModalState((state)=>state);
    const {id} = useVehicleIdState((state)=>state);

    const handleCloseModal = ():void =>{
        setOpenModal(false);
    }


    const handleClickAccept = async():Promise<void> => {
        await VehicleService.deleteVehicle(id.toString())
        inputAlert("Vehículo eliminado", "success");
        setOpenModal(false);
    }
    return (
        <div className="content-modal">
            <div className="modal-body">
                <p className="body">
                    ¿Estás seguro que deseas eliminar este vehículo? 
                </p>
                <div className="body-close" onClick={handleCloseModal}>x</div>
            </div>
            <div className="modal-footer">
                <Button className="button-modal" onClick={handleCloseModal}>
                    Cancelar
                </Button>
                <Button className="button-modal" background_color="var(--color-red)" onClick={handleClickAccept}>
                    Aceptar
                </Button>
            </div>
        </div>
    )
}