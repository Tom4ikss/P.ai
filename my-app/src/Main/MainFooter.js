import "./Main.scss"
import logo_1 from "../images/footer/footer_logo-1.svg"
import logo_2 from "../images/footer/footer_logo-2.svg"
import logo_3 from "../images/footer/footer_logo-3.svg"
import logo_4 from "../images/footer/footer_logo-4.svg"

const MainFooter = () => {
    return (
        <div className = "main-footer">
                <span className="main-footer__title">Chosen by progressive marketers.</span>
                <ul className= "main-footer__logo-list">
                    <li><img className="main-footer__logo-list-item " alt="" src = {logo_1}></img></li>
                    <li><img className="main-footer__logo-list-item main-footer__logo-list-item_mar-top" alt="" src = {logo_2}></img></li>
                    <li><img className="main-footer__logo-list-item " alt="" src = {logo_3}></img></li>
                    <li><img className="main-footer__logo-list-item " alt="" src = {logo_4}></img></li>
                </ul>
                <span className="main-footer__subtitle">Read success stories</span>
        </div>
    )
}

export default MainFooter