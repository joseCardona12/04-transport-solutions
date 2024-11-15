
import "./identifyStyles.scss";

interface IIdentiyProps {
    icon?: React.ReactElement,
    logoText?: string
}

export default function Identify({
    icon,
    logoText
}: IIdentiyProps):React.ReactNode{

    return (
        <div className="content-identify">
            <span>{icon}</span>
            <h2 className="identify-title">{logoText}</h2>
        </div>
    )
}