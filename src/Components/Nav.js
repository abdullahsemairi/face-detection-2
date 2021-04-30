import React from "react"

const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p className="signout f3 link dim black underline pa3 pointer"></p>
      </nav>
    )
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p className="signout f3 link dim black underline pa3 pointer"></p>
      </nav>
    )
  }
}

export default Nav
