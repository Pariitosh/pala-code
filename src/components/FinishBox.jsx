import { Link } from "react-router-dom"
function FinishBox(props){
    return(
<div className="alertt">
          <div className="upper">
            <p3>Correct Answers </p3>
            <p4>: {props.correct}/10</p4>
          </div>
          <div
            onClick={() => window.location.reload(false)}
            className="borders"
          >
            <p2>Play Again</p2>
          </div>
          <div className="borders">
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>Main Menu</p>
            </Link>
          </div>
          
        </div>
    )
}
export default FinishBox