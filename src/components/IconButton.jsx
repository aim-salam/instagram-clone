import React from "react";
import { Button } from "react-bootstrap";
function IconButton({ isTop, isBottom, iconClassName, onClick }) {
  let variant = "light";

  if (isTop) {
    variant = "light my-4";
  } else if (isBottom) {
    variant = "light mt-auto mb-3";
  }
  return (
    <Button variant={variant} style={{ marginBottom: "7px" }} onClick={onClick}>
      <i className={iconClassName} style={{ fontSize: "24px" }}></i>
    </Button>
  );
}

export default IconButton;
