import { Component } from "react"
import Particles from "react-particles-js"
import "./App.css"

import Nav from "./Components/Nav"
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm"
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition"
import Rank from "./Components/Rank/Rank"
import Logo from "./Components/Logo/Logo"
import Clarifai from "clarifai"
import Signin from "./Components/Signin/Signin"
import Register from "./Components/Register/Register"

const app = new Clarifai.App({
  apiKey: "2ddc1d857ec0409784fcf45b654a3305",
})

const particlesOption = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 600,
      },
    },
  },
}
const initialState = {
  input: "",
  imgUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("inputimage")
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    }
  }

  displayFaceBox = box => {
    console.log(box)
    this.setState({ box: box })
  }

  onInputChange = event => {
    this.setState({ input: event.target.value })
  }

  onSubmit = () => {
    this.setState({ imgUrl: this.state.input })
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,

        this.state.input
      )
      .then(response => {
        if (response) {
          fetch("", {
            method: "put",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(console.log)
        }

        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
  }
  onRouteChange = route => {
    if (route === "signout") {
      this.setState({ initialState })
    } else if (route === "home") {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { imgUrl, route, box } = this.state
    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />
        <Nav />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
            <FaceRecognition box={box} imgUrl={imgUrl} />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register />
        )}
      </div>
    )
  }
}
export default App
