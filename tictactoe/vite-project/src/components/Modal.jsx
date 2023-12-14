import { motion } from "framer-motion";
import BackDrop from "./backDrop";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }) => {
  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleClose();
  };
  return (
    <BackDrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit">
        <p>{text}</p>
        <motion.button
          onClick={handleCloseClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ color: "white" }}>
          Close❌
        </motion.button>
      </motion.div>
    </BackDrop>
  );
};
export default Modal;
