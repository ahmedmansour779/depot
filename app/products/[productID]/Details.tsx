"use client";

import Image from "next/image";
import { useState } from "react";
import user from "../../shared/user.png";

const ratingLength = [1, 2, 3, 4, 5]

export default function Details(props: { descriptionDetails: string, ratingDetails: number, titleDetails: string }) {
    const [options, setOptions] = useState<"DESCRIPTION" | "ADDITIONAL INFORMATION" | "REVIEWS">("DESCRIPTION")

    const description = () => {
        setOptions("DESCRIPTION")
    }
    const additionalInformation = () => {
        setOptions("ADDITIONAL INFORMATION")
    }
    const reviews = () => {
        setOptions("REVIEWS")
    }

    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const Description = () => {
        return (
            <div className="flex flex-col gap-4">
                <p className="font-bold" style={{ letterSpacing: "3px" }}>DESCRIPTION</p>
                <p className="text-hover text-sm">{props.descriptionDetails}</p>
            </div>
        )
    }

    const AdditionalInformation = () => {
        return (
            <div>
                <h1 className="font-bold pb-8" style={{ letterSpacing: "3px" }}>ADDITIONAL INFORMATION</h1>
                <div className="grid grid-cols-2 w-fit text-hover gap-y-2">
                    <div className="font-bold">Weight</div><div>2 kg</div>
                    <div className="font-bold">Dimensions</div><div>	10 × 10 × 15 cm</div>
                    <div className="font-bold">Color</div><div>	Black</div>
                    <div className="font-bold">Material</div><div>	Chrome</div>
                </div>
            </div>
        )
    }

    const Reviews = () => {
        return (
            <div className="">
                <div>
                    <h1 className="text-lg font-bold" style={{ letterSpacing: "2px" }}>1 REVIEW FOR {props.titleDetails}</h1>
                    <div className="flex flex-row gap-4 py-8">
                        <div>
                            <Image alt="user" src={user} />
                        </div>
                        <div className="flex flex-col gap-4 text-hover">
                            <div className="flex items-center space-x-1">
                                {ratingLength.map((rate) => {
                                    return (
                                        <svg key={rate} className={`w-4 h-4 ${rate <= props.ratingDetails ? "text-yellow-300" : "text-gray-500"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    )
                                })}
                            </div>
                            <p><span className=" font-bold">Nikole Burke</span> – 08.02.2017.</p>
                            <p>Very good!</p>
                        </div>
                    </div>
                    <form className="flex flex-col gap-4 text-sm">
                        <h4 className="font-bold " style={{ letterSpacing: "3px" }}>ADD A REVIEW</h4>
                        <p className=" text-hover">Your email address will not be published. Required fields are marked *</p>
                        <p>Your rating *</p>
                        <div className="flex items-center space-x-1">
                            {ratingLength.map((rate) => {
                                return (
                                    <button
                                        key={rate}
                                        onClick={() => handleRatingChange(rate)}
                                        className={`text-2xl ${rate <= rating ? 'text-yellow-400' : 'text-gray-300'
                                            }`}
                                    >
                                        <svg onClick={() => setRating(rate)} className={`w-4 h-4 ${rate <= rating ? "text-yellow-300" : "text-gray-500"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </button>
                                )
                            })}
                        </div>
                        <label>Your review *</label>
                        <textarea className=" p-4" />
                        <label>Name *</label>
                        <input className="p-4" type="text" />
                        <label>Email *</label>
                        <input className="text-hover p-4" type="email" />
                        <div className="flex flex-row gap-1">
                            <input type="checkbox" />
                            <label>Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <button className="w-fit bg-black text-white py-4 px-8 font-bold hover:opacity-50" style={{ letterSpacing: "2px" }}>SUBMIT</button>

                    </form>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row text-left md:text-center pt-8 border-gray-300 border-b-[1px]">
                <button className={`px-8 border-gray-300 text-left md:text-center border-[1px] py-4 text-sm ${options === "DESCRIPTION" ? "bg-black text-white" : ""}`} onClick={() => description()}>DESCRIPTION</button>
                <button className={`px-8 border-gray-300 text-left md:text-center border-[1px] py-4 text-sm ${options === "ADDITIONAL INFORMATION" ? "bg-black text-white" : ""}`} onClick={() => additionalInformation()}>ADDITIONAL INFORMATION</button>
                <button className={`px-8 border-gray-300 text-left md:text-center border-[1px] py-4 text-sm ${options === "REVIEWS" ? "bg-black text-white" : ""}`} onClick={() => reviews()}>REVIEWS</button>
            </div>
            <div className="py-20">
                {options === "DESCRIPTION" && <Description />}
                {options === "ADDITIONAL INFORMATION" && <AdditionalInformation />}
                {options === "REVIEWS" && <Reviews />}
            </div>
        </div>
    )
}
