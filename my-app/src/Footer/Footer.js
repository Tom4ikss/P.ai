import Logo from "../Logo/Logo"
import Demo from "./Demo"
import "./Footer.scss"

const Footer = () => {
    return (
        <>
            <Demo/>
            <footer className = "footer">
                <Logo/>
                <div className = "footer__lists"> 
                    <ul className="footer__lists-list">
                        <span className = "footer__lists-title">Product</span>
                        <li className="footer__lists-item footer__lists-item_first">Overview</li>
                        <li className="footer__lists-item">Customers</li>
                    </ul>
                    <ul className="footer__lists-list">
                        <span className = "footer__lists-title">Company</span>
                        <li className="footer__lists-item footer__lists-item_first">About Us</li>
                        <li className="footer__lists-item">Support</li>
                        <li className="footer__lists-item">Contact</li>
                    </ul>
                    <ul className="footer__lists-list">
                        <span className = "footer__lists-title">Social</span>
                        <li className="footer__lists-item footer__lists-item_first">Blog</li>
                        <li className="footer__lists-item">Twitter</li>
                        <li className="footer__lists-item">LinkedIn</li>
                    </ul>
                </div>
                <div className="footer__bottom">                
                    <span className="footer__bottom-item">Programmai Ltd. © 2022. All Rights Reserved.</span>
                    <div className="footer__bottom-item footer__bottom-item_agreements">
                        <span>Privacy Policy</span>
                        <span>Data Processing Agreement</span>
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer