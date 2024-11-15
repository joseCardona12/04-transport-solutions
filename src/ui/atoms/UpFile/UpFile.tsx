import "./upFileStyles.scss";

interface IUpFileProps{
    image_url:string,
}
export default function UpFile({
    image_url
}:IUpFileProps):React.ReactNode{
    return(
        <div className="content-upfile">
            <img className="upFile-image" src={image_url} alt="image-default" />
        </div>
    )
}