import { useState } from "react";


function NightModeBtn() {
  const [theme, setTheme] = useState(false);
  return (
    <div
      onClick={() => {
        setTheme(!theme);
        document.body.style.position = "static";
      }}
      className={`night__mode-button ${
        theme ? "night__mode-button-active" : ""
      }`}
    >
      <i className={theme ? "ri-sun-line" : "ri-moon-line"}></i>
    </div>
  );
}

export default NightModeBtn;
