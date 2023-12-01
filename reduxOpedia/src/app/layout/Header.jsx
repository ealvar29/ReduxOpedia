import React from "react";
import reactLogo from "../../assets/react.svg";
function Header() {
  return (
    <div className="flex pt-3 pl-2">
      <img className="flex flex-col pr-3" src={reactLogo} alt="" />
      <h1 className="h2 pt-4 text-white text-center">
        React Course - ReduxOpedia
      </h1>
    </div>
  );
}

export default Header;
