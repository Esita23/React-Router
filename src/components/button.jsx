import { Link } from "react-router-dom";
function Button({linkValue, buttonValue}) {
    return ( 
        <button> 
            <Link to={linkValue}>{buttonValue}</Link>
            </button>
     );
}

export default Button;