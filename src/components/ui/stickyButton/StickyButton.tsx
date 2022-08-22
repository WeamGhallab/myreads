import React from "react";
import PropTypes from "prop-types";

import classes from "./StickyButton.module.css";
import { Tooltip } from "@mui/material";

const StickyButton: React.FC<{
  containerClass: string;
  tooltipText: string;
  children: any;
  onClick: () => void;
  buttonColor: string;
}> = props => {
  return (
    <div className={`${classes["button-container"]} ${props.containerClass}`}>
      <Tooltip title={props.tooltipText}>
        <button
          type="button"
          style={{ backgroundColor: props.buttonColor }}
          className={classes.button}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      </Tooltip>
    </div>
  );
};

export default StickyButton;

StickyButton.propTypes = {
  children: PropTypes.any.isRequired,
  tooltipText: PropTypes.string.isRequired,
  containerClass: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
