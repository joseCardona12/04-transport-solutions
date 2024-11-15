
import "./sectionRegisterStyles.scss";
import { FormRegister } from "@/ui/organisms";

export default function SectionRegister():React.ReactNode{
    return (
        <section className="register-section">
            <div className="section-content">
                <FormRegister />
            </div>
        </section>
    )
}   