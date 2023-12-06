import React, { useState, useEffect } from "react";
import { Button, Stack } from "../components";
import { Page_colors } from "../styles/page_colors";
import FridgeClose from "../assets/imageDone/fridge02-close.png";
import FridgeOpen from "../assets/imageDone/fridge02-open.png";

const Fridge02 = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [click, setClick] = useState(false);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const Clicked = () => {
    setClick(!click);
  };

  console.log(screenSize, click);
  return (
    <Stack
      width="100vw"
      height="100vh"
      bg={Page_colors.main_color}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        width={screenSize.width}
        bg={Page_colors.main_color}
        border={Page_colors.main_color}
        onClick={() => Clicked()}
      >
        {click === false ? (
          <img src={FridgeClose} alt="logo" style={{ height: screenSize.height - 100}} />
        ) : (
          <img src={FridgeOpen} alt="logo" style={{  width: screenSize.width - 30 }} />
        )}
      </Button>
    </Stack>
  );
};

export default Fridge02;
