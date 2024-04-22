import { SiReaddotcv } from "react-icons/si";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>

        <div className="social">
          <a href="https://www.facebook.com/piotr.gulaszewski.56">
            <FaFacebook />
          </a>
          <a href="https://resume.io/r/7LBo7tLTm">
            <SiReaddotcv />
          </a>
          <a href="https://github.com/byteb4dger?tab=repositories">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
