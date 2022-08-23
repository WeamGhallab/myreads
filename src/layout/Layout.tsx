import React from "react";
import PropTypes from "prop-types";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { notificationsActions } from "../store/reducers/notifications-slice";
import SnackbarAlert from "../components/snackbarAlert/SnackbarAlert";
import classes from "./Layout.module.css";

const Layout: React.FC<{ children: any }> = props => {
  const notificationMessage = useAppSelector(
    state => state.notifications.message
  );
  const notificationStatus = useAppSelector(
    state => state.notifications.status
  );
  const showNotification = useAppSelector(
    state => state.notifications.showNotification
  );

  const dispatch = useAppDispatch();

  const closeStackBarHandler = () => {
    dispatch(notificationsActions.clear());
  };
  return (
    <div className={classes.container}>
      <main>{props.children}</main>
      <SnackbarAlert
        message={notificationMessage}
        status={notificationStatus}
        show={showNotification}
        onClose={closeStackBarHandler}
      />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired
};
