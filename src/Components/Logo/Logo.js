import React from "react"
import Tilt from "react-tilt"
import icon8 from "./icon8.png"
import "./Logo.css"

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 50 }} style={{ height: 200, width: 200 }}>
        <div className="Tilt-inner">
          <img style={{ paddingTop: "30px" }} src={icon8} alt="Logo"></img>{" "}
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
