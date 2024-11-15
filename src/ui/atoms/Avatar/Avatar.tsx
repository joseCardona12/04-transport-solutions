import "./avatarStyles.scss"

interface IAvatarProps {
    name:string,
    icon?: React.ReactElement
}
export default function Avatar({
    name,
    icon
}: IAvatarProps):React.ReactNode{
    return (
        <div className="content-avatar">
            {icon}
            <h6 className="avatar-name">{name}</h6>
        </div>
    )
}