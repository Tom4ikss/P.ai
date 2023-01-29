import Logo from "../Logo/Logo"
import "./Main.scss"
import ClientsInfo from "../ClientsInfo/ClientsInfo"

const Main = () => {
  return (
    <>
    <div className="main">
      <Logo elem_class = "main__logo"/>
      <header className="main__header">
          <div className="menu main__menu">
            <span className="menu__item">Product</span>
            <span className="menu__item">Customers</span>
            <span className="menu__item">About</span>
            <span className="menu__item">Blog</span>
            <span className="menu__item">Login</span>
          </div>
      </header>
      
      <div className="main__text-container">
          <div className="main__text-container-text">
            <div className="main__text-container-text-title">
              Generate unlimited,<br/>
              winning audiences.<br/>
              <span className="main__text-container-text-title_purple">No targeting gaps.</span>
            </div>
            <div className="main__text-container-text-subtitle">Use machine learning with first-party data to generate an endless amount of audiences for your marketing & advertising channels. No effort or delay & complementary to Customer Data Platforms.</div>
        </div>
      </div>
    </div>
    <ClientsInfo elem_class = "main__footer"/>
    </>
  )
}
export default Main