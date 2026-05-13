import "./SubTitle.css"

function SubTitle(props){
    return(
        <h1>
            {props.texto}
            {props.math}
        </h1>
    );
}



export default SubTitle;