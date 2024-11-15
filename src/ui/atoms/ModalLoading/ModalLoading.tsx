import "./modalLoadingStyles.scss"; 

interface IModalLoading{
    text:string,
}

export default function ModalLoading({
    text
}:IModalLoading):React.ReactNode{
    return (
        <div className="content-modal-loading">
            <div className="modal-body">
                <p className="body-information">{text}</p>
            </div>
        </div>
    )
}