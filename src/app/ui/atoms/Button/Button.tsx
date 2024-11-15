
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({
    children,
    ...props
}: IButtonProps):React.ReactNode{
    return (
        <button {...props}>
            {children}
        </button>
    )
}