import { StaticImageData } from "next/image";

export type ImageTypes = {
    id: number;
    image: StaticImageData;
    title: string
}[]

export type HeroTypes = {
    id: number;
    image: StaticImageData;
    image2: StaticImageData | string;
    title: string;
    body: string
}[]

export type ProductsTypes = {
    id: number;
    title: string;
    price: number;
    description: string;
    rating: {
        rate: number,
        count: number
    };
    image: string;
}

export type regType = {
    id: string,
    name: string,
    password: string,
    email: string,
    isAdmin: boolean
}

export interface RegType {
    id: string;
    name: string;
    password: string;
    email: string;
    isAdmin: boolean;
}