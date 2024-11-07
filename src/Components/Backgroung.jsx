import React from "react";

function Backgroung({ children, blur = false }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src="https://st2.depositphotos.com/4107269/7704/i/450/depositphotos_77040729-stock-photo-vacation-entertainment-concept.jpg"
        alt="Background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          filter: blur ? "blur(8px)" : "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}

export default Backgroung;
