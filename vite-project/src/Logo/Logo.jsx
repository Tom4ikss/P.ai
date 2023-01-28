import logo from "../images/logo/P.ai_logo.svg"
import "./Logo.scss"
const Logo = (props) => {
    return (
    <div className={"logo " + props.mod}>
        <img className="logo__img" id = "logo"  alt="logo" src={logo}></img>
        <label htmlFor="logo" className="logo__text">P.ai</label>
      </div>
    )
}
export default Logo