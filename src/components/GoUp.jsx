import React, { useEffect } from "react";

function GoUp() {
  useEffect(() => {
    setInterval(() => {
      if (window.pageYOffset > 100) {
        document.querySelector(".go-up").style.opacity = 1;
      } else {
        document.querySelector(".go-up").style.opacity = 0;
      }
    }, 1000);
  }, []);

  return (
    <a href="#home" className="go-up">
      <i className="mdi mdi-arrow-up-bold-circle"></i>
    </a>
  );
}

export default GoUp;
