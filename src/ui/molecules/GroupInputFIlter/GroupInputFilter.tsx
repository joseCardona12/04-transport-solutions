import { InputFIlter } from "@/ui/atoms";
import "./groupInputFIlterStyles.scss";

interface IGroupInputFilterProps {
    label:string,
}

export default function GroupInputFilter({
    label,
}: IGroupInputFilterProps):React.ReactNode{
    return (
        <div className="group-input-filter">
            <label htmlFor={label}>{label}</label>
            <InputFIlter />
        </div>
    )
}