import React from "react";

import "./style.scss";

require("@lottiefiles/lottie-player");

export function Loading() {
  return (
    <div id="animation-container">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets7.lottiefiles.com/datafiles/Hhw0wgYmETDTkxW/data.json"
        className="animation"
      />
    </div>
  );
}
