
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?:string,
    placeholder?:string,
    name?:string,
    type?:string,
}

export default function Input({
    placeholder,
    error,
    name,
    type = "text",
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
        </div>
    )
}