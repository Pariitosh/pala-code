function CorrectBox(props){
    return (
        <div className="CorrectBox">
              <div className="correct">
                <div className="bb">
                  <p>{props.ans} Answer</p>
                </div>
                <div onClick={props.ok} className="bb2">
                  <p>Next</p>
                </div>
              </div>
            </div>
    )
}
export default CorrectBox