import React from "react";

require("@lottiefiles/lottie-player");

export function HeroImageAnimation() {
  return (
    <div id="animation-container">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets6.lottiefiles.com/private_files/lf30_ozooq5gn.json"
      />
    </div>
  );
}
