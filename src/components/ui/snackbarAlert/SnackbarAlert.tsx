import React from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";
import PropTypes from "prop-types";

const SnackbarAlert: React.FC<{
  message: string | null;
  status: AlertColor | undefined;
  show: boolean;
  onClose: () => void;
}> = props => {
  return (
    <Snackbar open={props.show} autoHideDuration={3000} onClose={props.onClose}>
      <Alert
        onClose={props.onClose}
        severity={props.status}
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;

SnackbarAlert.propTypes = {
  message: PropTypes.string,
  status: PropTypes.any,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
