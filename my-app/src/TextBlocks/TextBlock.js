import "./Block.scss"

const TextBlock = (props) => {
    let className = "columns"
    if(props.mod) {
        className += " cloumns_" + props.mod
    }
    return (
        <div className={className}>
            <div className="columns__column-1">
                <div className="columns__column-1-text">
                    <div className="columns__column-1-text-title">
                        {props.title}
                    </div>
                    <div className="columns__column-1-text-subtitle">
                        {props.subtitle}<br/>
                       
                    </div> 
                    <span className="columns__column-1-text-link">Learn more</span>
                </div>
            </div>
            <div className="columns__column-2">
                <div className="columns__container"> 
                <img height = "700" alt="" src={props.svg} className="column__svg"></img>
                </div>
              
            </div>
       </div>
       
    )
}

export default TextBlock