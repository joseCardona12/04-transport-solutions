import { IconDelete, IconFilter } from "@/assets/icons";
import { Button } from "@/ui/atoms";
import GroupInputFilter from "@/ui/molecules/GroupInputFIlter/GroupInputFilter";
import "./filterStyles.scss";

export default function Filter():React.ReactNode{
    
    return (
        <div className="content-filter">
            <div className="filters">
                <GroupInputFilter
                    label="Placa"
                />
                <GroupInputFilter
                    label="Año"
                />
                <GroupInputFilter
                    label="Marca"
                />
                <GroupInputFilter
                    label="Modelo"
                />
            </div>
            <div className="filter-buttons">
                <Button>
                    <IconFilter />
                    Buscar
                </Button>
                <Button>    
                    <IconDelete />
                    Limpiar
                </Button>
            </div>
        </div>
    )
}