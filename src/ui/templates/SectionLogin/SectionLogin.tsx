import Identify from "@/ui/atoms/Identify/Identify";
import "./sectionLoginStyles.scss";
import { FormLogin } from "@/ui/organisms";

export default function SectionLogin():React.ReactNode{
    return (
        <section className="login-section">
            <div className="section-content">
                <FormLogin />
            </div>
        </section>
    )
}   