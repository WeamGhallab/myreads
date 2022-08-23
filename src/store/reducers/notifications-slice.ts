import { AlertColor } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  showNotification: boolean;
  message: string | null;
  showSpinner: boolean;
  status: AlertColor | undefined;
} = {
  showNotification: false,
  showSpinner: false,
  message: null,
  status: undefined
};

export const notificationsSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    sendRequest(state) {
      state.showNotification = false;
      state.showSpinner = true;
      state.message = null;
      state.status = undefined;
    },
    getResponse(state) {
      state.showNotification = true;
      state.showSpinner = false;
      state.message = "Done Successfully!";
      state.status = "success";
    },
    getError(state, action) {
      state.showNotification = true;
      state.showSpinner = false;
      state.message = action.payload || "Something went wrong!";
      state.status = "error";
    },
    clear(state) {
      state.showNotification = false;
      state.showSpinner = false;
      state.message = null;
      state.status = undefined;
    }
  }
});
export const notificationsActions = notificationsSlice.actions;
