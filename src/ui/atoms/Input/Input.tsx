import "./inputStyles.scss";
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?:string,
    placeholder?:string,
    name?:string,
    type?:string,
    icon?:React.ReactElement
}

export default function Input({
    placeholder,
    error,
    name,
    type = "text",
    icon,
    ...props
}: IInputProps):React.ReactNode{
    return (
        <div className="content-input">
            <input
                placeholder={placeholder}
                type={type}
                {...props}
            />
            {error && <p className="input-error">{error}</p>}
            {icon && <div className="icon">{icon}</div>}
        </div>
    )
}