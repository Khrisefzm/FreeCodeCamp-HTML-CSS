import React from "react";

function Button ({text, url}) {
  return (
    <>
      <h2 className="text-center"> {text} </h2>
      <div className="d-flex justify-content-center">
        <button type="button" class="btn btn-primary" src={url}>View</button>
      </div>
      
    </>
  )
}

export default Button;