import React from "react";
import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";

import classes from "./SearchTextBar.module.css";

const SearchTextBar = React.forwardRef<
  HTMLInputElement,
  {
    children: any;
    onClickButton: () => void;
    onChangeText: () => void;
    isButtonPositionRight: boolean;
    buttonTooltipText: string;
    buttonColor: string;
    buttonWidth: number;
    inputPlaceholder: string;
    disabled: boolean;
  }
>((props, ref) => {
  return (
    <div className={classes["search-bar"]}>
      <Tooltip title={props.buttonTooltipText}>
        <button
          type="button"
          className={classes["button-search"]}
          onClick={props.onClickButton}
          style={{
            backgroundColor: props.buttonColor,
            width: props.buttonWidth
          }}
        >
          {props.children}
        </button>
      </Tooltip>
      <div className={classes["search-input-wrapper"]}>
        <input
          disabled={props.disabled}
          onChange={props.onChangeText}
          ref={ref}
          type="text"
          placeholder={props.inputPlaceholder}
        />
      </div>
    </div>
  );
});

export default SearchTextBar;

SearchTextBar.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  buttonTooltipText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  buttonWidth: PropTypes.number.isRequired,
  isButtonPositionRight: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired
};
