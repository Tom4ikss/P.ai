import "./ClientsInfo.scss"
import logo_1 from "../images/clients_info/client_logo-1.svg"
import logo_2 from "../images/clients_info/client_logo-2.svg"
import logo_3 from "../images/clients_info/client_logo-3.svg"
import logo_4 from "../images/clients_info/client_logo-4.svg"

const ClientsInfo = (props) => {
    return (
        <div className = {"clients-info " + props.elem_class}>
                <span className="clients-info__title">Chosen by progressive marketers.</span>
                <ul className= "clients-info__logo-list">
                    <li><img className="clients-info__logo-list-item " alt="" src = {logo_1}></img></li>
                    <li><img className="clients-info__logo-list-item clients-info__logo-list-item_mar-top" alt="" src = {logo_2}></img></li>
                    <li><img className="clients-info__logo-list-item " alt="" src = {logo_3}></img></li>
                    <li><img className="clients-info__logo-list-item " alt="" src = {logo_4}></img></li>
                </ul>
                <span className="clients-info__subtitle">Read success stories</span>
        </div>
    )
}

export default ClientsInfo