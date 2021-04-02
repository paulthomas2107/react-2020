import React, { useState } from "react";

const UseStateBasics = () => {
  //console.log(useState("Hello Paul"));
  //const value = useState(217)[0];
  //const handler = useState(217)[1];
  //console.log(value, handler);
  const [text, setText] = useState("random title !");
  const handleClick = () => {
    if (text === "random title") {
      setText("Hello Paul !!");
    } else {    
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
