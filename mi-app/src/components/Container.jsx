import React from "react";

function Container({children}){
  return (
    <div className="container-fluid">
      <div className="col-sm-12 col-md-10 col-lg-8 m-auto bg-light-subtle">
        <h1 className="text-center"> FreeCodeCamp Projects </h1>
        {children}
      </div>
    </div>
  )
}

export default Container;