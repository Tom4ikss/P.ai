import "./Scheme.scss"

const SchemeText = (props) => {
    return (
        <div className = "scheme-block">
            <img className = "scheme-block__line" src = {props.line} alt=""></img>
            <div className = "scheme-block__text">
                <div className = "scheme-block__text-title">
                    <img className = "scheme-block__text-title-img" alt="" src = {props.cube}></img>
                    <span>{props.title}</span>
                </div>
                <span className = "scheme-block__text-main">{props.main_txt}</span><br/>
                <span className = "scheme-block__text-link">View customer stories</span>
            </div>
        </div>
    )
}

export default SchemeText