import "./Scheme.scss"
import SchemeBlock from "./SchemeBlock"
import cube_1 from "../images/scheme/cube-1.svg"
import cube_2 from "../images/scheme/cube-2.svg"
import cube_3 from "../images/scheme/cube-3.svg"
import line_1 from "../images/scheme/line-1.svg"
import line_2 from "../images/scheme/line-2.svg"
import line_3 from "../images/scheme/line-3.svg"
import plus from "../images/scheme/plus.svg"
import SchemeSvg from "./SchemeSvg"

const Scheme = () => {
    return (
        <div className="scheme">
            <div className="scheme__title">
                <span>Volume, uplift and efficiency.</span><br/>
                <span>No trade-offs.</span>
            </div>
            <SchemeSvg/>
            <div className="scheme__blocks">
                <SchemeBlock line = {line_1} cube = {cube_1} title = "Volume" main_txt = "Always-on, predictive acquisition and retention. Acquire new and repeat customers across any ad platform, at scale."/>
                <SchemeBlock plus = {plus} line = {line_2} cube = {cube_2} title = "Efficiency" main_txt = "Predictive Audiences that ensure you invest the optimal amount based on every customer’s predicted conversion and customer lifetime value. No waste."/>
                <SchemeBlock line = {line_3} cube = {cube_3} title = "Uplift" main_txt = "Prove incrementality using multi-cell lift tests, with holdouts. This is real performance."/>
            </div>
        </div>
    )
}

export default Scheme