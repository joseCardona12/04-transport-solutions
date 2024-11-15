import "./buttonStyles.scss";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    background_color?:string,
    width?:string,
    border_color?:string
}

export default function Button({
    children,
    background_color,
    width,
    border_color,
    ...props
}: IButtonProps):React.ReactNode{
    return (
        <button {...props} style={{backgroundColor:background_color, width:width, borderColor:border_color}}>
            {children}
        </button>
    )
}