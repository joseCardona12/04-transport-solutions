interface ISectionTitleProps {
    sectionTitle:string
}
export default function SectionTitle({
    sectionTitle,
}:ISectionTitleProps):React.ReactNode{
    return (
        <div className="section-title">
            <h2>{sectionTitle}</h2>
        </div>
    )
}