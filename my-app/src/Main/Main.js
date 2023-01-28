import Logo from "../Logo/Logo"
import "./Main.scss"
import MainFooter from "./MainFooter"

const Main = () => {
  return (
    <>
    <div className="main">
      <Logo/>
      <header className="header">
          <div className="menu">
            <span className="menu__item">Product</span>
            <span className="menu__item">Customers</span>
            <span className="menu__item">About</span>
            <span className="menu__item">Blog</span>
            <span className="menu__item">Login</span>
          </div>
      </header>
      
      <div className="container">
          <div className="container__text">
            <div className="container__text-title">
              Generate unlimited,<br/>
              winning audiences.<br/>
              <span className="container__text-title_purple">No targeting gaps.</span>
            </div>
            <div className="container__text-subtitle">Use machine learning with first-party data to generate an endless amount of audiences for your marketing & advertising channels. No effort or delay & complementary to Customer Data Platforms.</div>
        </div>
      </div>
    </div>
    <MainFooter/>
    </>
  )
}
export default Main