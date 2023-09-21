"use client";

import { motion } from "framer-motion";

export default function FiltersDetails() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} className="absolute w-96  bg-primary right-0 p-8">
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-8">
                    <h6 className="text-white">SORT BY</h6>
                    <div className="flex flex-col gap-2 text-hover text-sm">
                        <a href="#" className="hover:text-white">Default</a>
                        <a href="#" className="hover:text-white">Popularity</a>
                        <a href="#" className="hover:text-white">Average rating</a>
                        <a href="#" className="hover:text-white">Newness</a>
                        <a href="#" className="hover:text-white">Price: Low to High</a>
                        <a href="#" className="hover:text-white">Price: High to Low</a>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <h6 className="text-white">PRICE RANGE</h6>
                    <div className="flex flex-col gap-2 text-hover text-sm">
                        <a href="#" className="hover:text-white">All</a>
                        <a href="#" className="hover:text-white">$0-$10</a>
                        <a href="#" className="hover:text-white">$10-$20</a>
                        <a href="#" className="hover:text-white">$20-$30</a>
                        <a href="#" className="hover:text-white">$30-$40</a>
                        <a href="#" className="hover:text-white">40$+</a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}