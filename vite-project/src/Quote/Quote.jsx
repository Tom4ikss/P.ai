import "./Quote.scss"
import logo from "../images/quote/quote_logo.svg"
import symbol from "../images/quote/quote_symbol.svg"

const Quote = () => {
    return (
        <div className="quote">
            <div className="quote__container">
                <img alt = "" src = {logo} className="quote__container-logo"></img>
                <div className="quote__container-text">
                <img alt = "" src = {symbol} className="quote__container-text-symbol"></img>
                    <span className="quote__container-text-main">This magical product actually works! P.ai has radically changed the way we build our audiences at Treatwell. Increasing new customer sales by</span><br/>
                    <div className="quote__container-text-subtitle">
                        <span className="quote__container-text-subtitle_first">Albert Abello</span><br/>
                        <span className="quote__container-text-subtitle_second">Director of Growth, Treatwell</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote