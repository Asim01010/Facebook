import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PostData from "./PostData";
import { useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import { decorativeBG, gradientBG, solidBG } from "./decorative";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  //   border: "2px solid #000",
  boxShadow: 24,
  outline: "none",
};

export default function PostModel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-[100%]">
      <div
        onClick={handleOpen}
        // onClick={postShow}
        className="flex items-center justify-start bg-gray-200/50 p-2 rounded-full w-[100%] cursor-pointer"
      >
        <p>What's on your mind? {user.l_name}</p>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backgroundColor: "rgba(255, 255, 255, 0.6)", // Light white backdrop
            },
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-description"
              sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <PostData />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
