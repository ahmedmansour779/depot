import { StaticImageData } from "next/image"

export type Image = {
    id: number,
    image: StaticImageData,
    title: string
}[]