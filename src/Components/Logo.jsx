import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src="https://w7.pngwing.com/pngs/265/349/png-transparent-blogger-computer-icons-logo-blogger-logo-icon-svg-miscellaneous-text-trademark.png"
        alt=""
        style={{ width: width, height: "45px", borderRadius: "35%" }}
      />
    </div>
  );
}

export default Logo;
