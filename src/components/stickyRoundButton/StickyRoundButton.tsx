import React from "react";
import PropTypes from "prop-types";

import classes from "./StickyRoundButton.module.css";
import { Tooltip } from "@mui/material";

const StickyRoundButton: React.FC<{
  bottom: number;
  right: number;
  tooltipText: string;
  children: any;
  onClick: () => void;
  buttonColor: string;
  buttonRadius: number;
}> = props => {
  return (
    <div
      className={classes["button-container"]}
      style={{ bottom: props.bottom, right: props.right }}
    >
      <Tooltip title={props.tooltipText}>
        <button
          type="button"
          style={{
            backgroundColor: props.buttonColor,
            width: props.buttonRadius,
            height: props.buttonRadius
          }}
          className={classes.button}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      </Tooltip>
    </div>
  );
};

export default StickyRoundButton;

StickyRoundButton.propTypes = {
  children: PropTypes.any.isRequired,
  tooltipText: PropTypes.string.isRequired,
  bottom: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  buttonColor: PropTypes.string.isRequired,
  buttonRadius: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
