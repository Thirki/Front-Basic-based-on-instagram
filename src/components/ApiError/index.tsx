import React from "react";

import "./style.scss";

require("@lottiefiles/lottie-player");

export function ApiError() {
  return (
    <div id="api-error">
      <lottie-player
        autoplay
        mode="normal"
        keepLastFrame
        src="https://assets6.lottiefiles.com/packages/lf20_hXHdlx.json"
      />
    </div>
  );
}
