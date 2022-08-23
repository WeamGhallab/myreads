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
    buttonTooltipText: string;
    buttonColor: string;
    buttonWidth: number;
    inputPlaceholder: string;
    disabled: boolean;
  }
>((props, ref) => {
  const {
    buttonColor,
    children,
    onChangeText,
    onClickButton,
    inputPlaceholder,
    buttonTooltipText,
    buttonWidth,
    disabled
  } = props;

  return (
    <div className={classes["search-bar"]}>
      <Tooltip title={buttonTooltipText}>
        <button
          type="button"
          className={classes["button-search"]}
          onClick={onClickButton}
          style={{
            backgroundColor: buttonColor,
            width: buttonWidth
          }}
        >
          {children}
        </button>
      </Tooltip>
      <div className={classes["search-input-wrapper"]}>
        <input
          disabled={disabled}
          onChange={onChangeText}
          ref={ref}
          type="text"
          placeholder={inputPlaceholder}
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
  disabled: PropTypes.bool.isRequired
};
