import { useState } from "react"
import "./random.scss"
export const RandomChoicePicker = () => {
  const [data, setData] = useState("hello, Jitesh!!");
  const [save, setSave] = useState(data);
  return (
    <div className="random-choice-picker-container">
      <h2 className="paragraph">
        Enter all of the choices divided by a comma ' , ' <br />
        Press enter when you are done.
      </h2>
      <textarea name="" id="" placeholder="enter your choices here..." value={data} cols="50" rows="8" onChange={(e) => {
        setData(e.target.value)
      }} onKeyDown={(e) => {
        if (e.key === "Enter") {
          setSave(data)
        }
      }}></textarea>
      <div className="choices">
        {
          save.split(',').map((_, i) => {
            if (_ !== " ") {
              return <span key={i} onClick={() => {

              }}>{_.trim()}</span>
            }
          })
        }
      </div>
    </div>
  )
}


