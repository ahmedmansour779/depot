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
    category: string;
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

type user = {
    isLoggedIn: boolean;
    name: string;
    isAdmin: boolean,
}

type form = {
    show: "register" | "login",
}


export type translations = {
    ar: string,
    email: string,
    en: string,
    logOut: string,
    login: string,
    password: string,
    register: string,
    repeatPassword: string,
    userName: string,
    home: string,
    products: string,
    washList: string,
    controlBoard: string,
    profile: string,
    cart: string,
    theEmailIsIncorrect: string,
    thePasswordIsIncorrect: string,
    rememberMe: string,
    connectionError: string,
    LostPassword: string,
    passwordDoesNotMatch: string,
    msgPrivacy: string,
    privacyPolicy: string,
    errorInRegister: string,
    welcome: string,
    msgSidePar: string,
    followUs: string,
    heroTitle1: string,
    heroBody1: string,
    heroTitle2: string,
    heroBody2: string,
    heroTitle3: string,
    heroBody3: string,
    all: string,
    womenClothing: string,
    mensClothing: string,
    jewelery: string,
    electronics: string,
    filter: string,
    priceRange: string,
    addToCart: string,
    quickLook: string,
    addToWishlist: string,
    quantity: string,
    customerService: string,
    helpContactUs: string,
    returnsRefunds: string,
    termCondition: string,
    compony: string,
    whatWeDo: string,
    availableService: string,
    latestPost: string,
    faqs: string,
    socialMedia: string,
    twitter: string,
    instagram: string,
    faceBook: string,
    gitHub: string,
    myAccount: string,
    checkout: string,
    orderTracking: string,
    helpSupport: string,
    msgFooter: string,
    followUsWord: string,
}

export type keyObj = "ar" | "email" | "en" | "logOut" | "login" | "password" | "register" | "repeatPassword" | "userName" | "home" | "products" | "washList" | "controlBoard" | "profile" | "cart" | "theEmailIsIncorrect" | "thePasswordIsIncorrect" | "rememberMe" | "connectionError" | "LostPassword" | "passwordDoesNotMatch" | "msgPrivacy" | "privacyPolicy" | "errorInRegister" | "welcome" | "msgSidePar" | "followUs" | "heroTitle1" | "heroBody1" | "heroTitle2" | "heroBody2" | "heroTitle3" | "heroBody3" | "all" | "womenClothing" | "mensClothing" | "jewelery" | "electronics" | "filter" | "priceRange" | "addToCart" | "quickLook" | "addToWishlist" | "quantity" | "customerService" | "helpContactUs" | "returnsRefunds" | "termCondition" | "compony" | "whatWeDo" | "availableService" | "latestPost" | "faqs" | "socialMedia" | "twitter" | "instagram" | "faceBook" | "gitHub" | "myAccount" | "checkout" | "orderTracking" | "helpSupport" | "msgFooter" | "followUsWord";

type language = {
    language: "ar" | "en",
    translations: translations
}

export type RootState = {
    user: user,
    showForm: form,
    translations: language,
    theme: ThemeState,
    filterPrice: typeValueFilter
}

export interface ThemeState {
    mode: 'light' | 'dark';
    colors: {
        background: string;
        text: string;
        button: string;
    };
}

export type typeProduct = "" | "men%27s%20clothing" | "jewelery" | "electronics" | "women%27s%20clothing"

export type typeValueFilter = {
    value: "all" | "0-10" | "10-20" | "20-30" | "30-40" | "+40"
}