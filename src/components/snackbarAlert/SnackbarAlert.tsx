import React from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";
import PropTypes from "prop-types";

const SnackbarAlert: React.FC<{
  message: string | null;
  status: AlertColor | undefined;
  show: boolean;
  onClose: () => void;
}> = props => {
  const { show, onClose, status, message } = props;
  return (
    <Snackbar open={show} autoHideDuration={3000} onClose={onClose}>
      <Alert onClose={onClose} severity={status} sx={{ width: "100%" }}>
        {message}
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
