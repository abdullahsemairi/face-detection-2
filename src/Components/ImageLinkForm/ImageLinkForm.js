import React from "react"
import "./ImageLink.css"

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <div>
        <p className="f3">{"If the image has a face it'll detect it"}</p>
        <div className="center">
          <div className="form center pa4 br3 shadow-5">
            <input className="f4 pa2 w-70 center" type="tex" onChange={onInputChange} />
            <button onClick={onSubmit} className="w-30 grow f4 link ph3 dib white bg-light-purple">
              BUTTON
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
