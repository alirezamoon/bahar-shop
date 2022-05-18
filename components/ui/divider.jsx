import { Box } from "@mui/material";

const Divider = ({ color = "#FFFFFF4D", mx = "16px", h = "16px", ml, mr }) => {
  return (
    <Box
      sx={{
        borderRight: "1px solid",
        borderColor: color,
        mx: mx,
        marginLeft: ml,
        marginRight: mr,
        height: h,
        alignSelf: "center",
      }}
    />
  );
};

export default Divider;
