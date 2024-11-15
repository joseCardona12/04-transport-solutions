import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import { Input } from "@/app/ui/atoms";
import "./formFieldStyles.scss";

interface IFormFieldProps<T extends FieldValues>{
    control:Control<T>,
    error?:FieldError,
    name:Path<T>
    type:string,
    placeholder:string,
    id?:string,
    label:string
}
export default function FormField<T extends FieldValues>({
    control,
    error,
    name,
    type,
    placeholder,
    id,
    label,
}:IFormFieldProps<T>):React.ReactNode{
    return(
        <div className="content-formField">
            <label 
                htmlFor={id || label.toLocaleLowerCase()}>
                {label}
            </label>
            <Controller
                name={name}
                control={control}
                render={({field}) =>(
                    <Input
                        id={id || label.toLocaleLowerCase()}
                        type={type}
                        placeholder={placeholder}
                        {...field}
                        error={error?.message}
                    />
                )}
            
            />
        </div>
    )
}