import { StyledCard } from "./style";
import { motion } from "framer-motion";
import { themeTransitionContext } from "../../App";
import { useContext } from "react";

export const Card = ({ children }) => {
  const isTransition = useContext(themeTransitionContext);
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 10,
        mass: 0.75,
      }}
      viewport={{ once: true }}
    >
      <StyledCard isTransition={isTransition}>{children}</StyledCard>
    </motion.div>
  );
};