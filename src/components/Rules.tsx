import RulesImage from "@/assets/images/image-rules-bonus.svg";
import Button from "@/components/common/Button";
import useEventListener from "@/hooks/useEventListener";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function Rules() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const handleOpen = () => setIsRulesOpen(true);
  const handleClose = () => setIsRulesOpen(false);
  useEventListener("keydown", (e) => {
    if (e.code === "Escape") setIsRulesOpen(false);
  });

  return (
    <>
      <Button onClick={handleOpen} variant="outline" size="lg">
        Rules
      </Button>
      <AnimatePresence>
        {isRulesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 z-50 grid place-items-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative flex h-full w-full flex-col justify-around gap-4 bg-white p-6 sm:h-auto sm:w-fit sm:rounded-md sm:shadow-md"
            >
              <h2 className="text-center text-3xl font-bold text-dark sm:text-start">Rules</h2>
              <img src={RulesImage} alt="rules-image" className="mx-auto w-full max-w-xs" />
              <Button
                variant="ghost"
                onClick={handleClose}
                className="mx-auto text-dark opacity-30 sm:absolute sm:right-6 sm:top-6"
              >
                <XIcon />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
