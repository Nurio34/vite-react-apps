import React from "react";
import Search from "./Search";
import { motion } from "framer-motion";

function index() {
    return (
        <header className=" bg-black grid gap-[2vh] justify-center py-[2vh] px-[4vw] grid-cols-1">
            <div className="relative">
                <div className="absolute border-l border-r border-white w-16 h-8 ">
                    <motion.div
                        className="w-4 aspect-square rounded-full bg-white "
                        animate={{
                            x: [0, 24, 36, 48, 24, 12, 0],
                            y: [8, -8, 16, 8, -8, 16, 8],
                        }}
                        transition={{
                            x: {
                                duration: 2,
                                // ease: "ease",
                                repeat: Infinity,
                            },
                            y: {
                                // ease: "ease",
                                repeat: Infinity,
                                duration: 2,
                            },
                            // repeatType: "reverse",
                        }}
                    ></motion.div>
                </div>
                <h1
                    className=" text-white text-center font-bold text-2xl capitalize"
                    style={{ fontVariant: "small-caps" }}
                >
                    Find Unsplash Images
                </h1>
            </div>

            <Search />
        </header>
    );
}

export default index;
