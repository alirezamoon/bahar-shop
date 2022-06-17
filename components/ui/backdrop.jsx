import { Box } from "@mui/material"

const Backdrop = (props) =>
  props.show ? (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
      onClick={props.hide}
    />
  ) : null

export default Backdrop
