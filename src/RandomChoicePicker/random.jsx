import { useState } from "react"
import "./random.scss"
export const RandomChoicePicker = () => {
  const [data, setData] = useState("hello, Jitesh!!");
  return (
    <div className="random-choice-picker-container">
      <h2 className="paragraph">
        Enter all of the choices divided by a comma ' , ' <br />
        Press enter when you are done.
      </h2>
      <textarea name="" id="" placeholder="enter your choices here..." value={data} cols="50" rows="8" onChange={(e) => {
        setData(e.target.value)
      }}></textarea>
      <div className="choices">
        {
          data.split(',').map((_, i) => {
            return <span key={i}>{_.trim()}</span>
          })
        }
      </div>
    </div>
  )
}


const Choices = [7, 8, 9, 10]