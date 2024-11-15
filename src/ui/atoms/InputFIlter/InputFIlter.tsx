
import "./inputFilterStyles.scss";
interface IInputFIlterProps extends React.InputHTMLAttributes<HTMLInputElement> {
}


export default function InputFIlter({
    ...props
}: IInputFIlterProps):React.ReactNode{
    return (
        <input 
            {...props}
        />
    )
}