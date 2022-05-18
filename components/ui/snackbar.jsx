import { Snackbar as SBar, Alert } from "@mui/material";
import React from "react";

const Snackbar = ({
  open = true,
  handleClose,
  duration = 3000,
  variant = "success",
  message,
}) => (
  <SBar open={open} autoHideDuration={duration} onClose={handleClose}>
    <Alert severity={variant} sx={{ width: "100%" }} onClose={handleClose}>
      <p style={{ margin: "0" }}>{message}</p>
    </Alert>
  </SBar>
);
export default Snackbar;
