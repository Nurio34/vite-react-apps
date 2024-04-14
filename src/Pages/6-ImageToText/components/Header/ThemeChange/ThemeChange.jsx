import { useGlobalContext } from "../../../GlobalApp";
import { Moon, Sun } from "./assets/icons";
import { motion } from "framer-motion";
function ThemeChange() {
    const { isThemeLight, setIsThemeLight } = useGlobalContext();

    return (
        <button
            className={`rounded-full overflow-hidden p-1 ${
                isThemeLight ? " bg-black" : " bg-blue-400"
            } `}
            onClick={(e) => setIsThemeLight(!isThemeLight)}
        >
            {isThemeLight && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -24,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{ y: -24 }}
                >
                    <Moon />
                </motion.div>
            )}
            {!isThemeLight && (
                <motion.div
                    initial={{ y: 24 }}
                    animate={{ y: 0 }}
                    exit={{ y: 24 }}
                >
                    <Sun />
                </motion.div>
            )}
        </button>
    );
}

export default ThemeChange;
