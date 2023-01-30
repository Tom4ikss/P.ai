import "./Scheme.scss"

const SchemeText = (props) => {
    return (
        <div className = "scheme__blocks-block">
            {props.plus ? <><img className="scheme__blocks-plus" src = {props.plus} alt = ""></img><img className="scheme__blocks-plus" src = {props.plus} alt = ""></img></> : ""}
            <img className = "scheme__blocks-block-line" src = {props.line} alt=""></img>
            <div className = "scheme__blocks-block-text">
                <div className = "scheme__blocks-block-text-title">
                    <img className = "scheme__blocks-block-text-title-img" alt="" src = {props.cube}></img>
                    <span>{props.title}</span>
                </div>
                <span className = "scheme__blocks-block-text-main">{props.main_txt}</span><br/>
                <span className = "scheme__blocks-block-text-link">View customer stories</span>
            </div>
        </div>
    )
}

export default SchemeText