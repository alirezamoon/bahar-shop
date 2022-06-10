import { Dialog, DialogContent, Box, Typography, Button } from "@mui/material"
import Link from "next/link"

const LoginModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          maxWidth: "500px",
          width: "100%",
          paddingTop: "32px",
          backgroundColor: "transparent",
          boxShadow: "none",
          position: "relative",
        },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#FFF",
            borderRadius: "10px",
            padding: "56px 0 24px 0",
            minHeight: "256px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Typography sx={{ marginBottom: "20px" }}>
              لطفا ابتدا وارد حساب کاربری خود شوید
            </Typography>
            <Link href={`/login`}>
              <Button variant="contained" sx={{ width: "100px" }}>
                ورود
              </Button>
            </Link>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal
