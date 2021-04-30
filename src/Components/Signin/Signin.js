import React from "react"
import "./SignIn.css"

class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signInEmail: "",
      signInPassword: "",
    }
  }
  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value })
  }
  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value })
  }
  render() {
    const { onRouteChange } = this.props
    return (
      <article className="br4 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0"></legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Detect if an image contains human faces, and coordinate locations of where those faces appear with a
                  bounding box.
                </label>
              </div>
              <br />
              <br />

              <label className="pa0 ma0 lh-copy f6 pointer"></label>
            </fieldset>
            <div className="">
              <input
                onClick={() => onRouteChange("home")}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Start"
              />
            </div>
            <div className="lh-copy mt3"></div>
          </form>
        </div>
      </article>
    )
  }
}

export default Signin
