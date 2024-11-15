
import "./identifyStyles.scss";

interface IIdentiyProps {
    icon?: React.ReactElement,
    logoText?: string,
    className?:string,
}

export default function Identify({
    icon,
    logoText,
    className,
}: IIdentiyProps):React.ReactNode{

    return (
        <div className={`content-identify ${className}`}>
            <span>{icon}</span>
            <h2 className="identify-title">{logoText}</h2>
        </div>
    )
}