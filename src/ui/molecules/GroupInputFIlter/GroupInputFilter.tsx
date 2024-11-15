import { InputFIlter } from "@/ui/atoms";
import "./groupInputFIlterStyles.scss";

interface IGroupInputFilterProps {
    label:string,
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) =>void;
    name:string,
    value:string,
}

export default function GroupInputFilter({
    label,
    onChange,
    name,
    value,
}: IGroupInputFilterProps):React.ReactNode{
    return (
        <div className="group-input-filter">
            <label htmlFor={label}>{label}</label>
            <InputFIlter onChange={onChange} name={name} value={value} />
        </div>
    )
}