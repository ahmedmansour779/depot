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
    isFavorite: boolean;
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
    wishList: [];
}

type user = {
    isLoggedIn: boolean;
    name: string;
    isAdmin: boolean,
    wishListNumbers: number | null
    id: string;
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
    wishList: string,
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
    menu: string,
    search: string,
    language: string,
    pages: string,
    aboutUs: string,
    services: string,
    history: string,
    msgTapAboutUs: string,
    msgTapService: string,
    msgTapHistory: string,
    whatTheyReSaying: string,
    textSayingOne: string,
    textSayingTwo: string,
    textSayingThree: string,
    textSayingOneCustomer: string,
    textSayingOneCustomerJop: string,
    textSayingTwoCustomer: string,
    textSayingTwoCustomerJop: string,
    textSayingThreeCustomer: string,
    textSayingThreeCustomerJop: string,
    whatCanWeDo: string,
    answerWhatCanWeDo: string,
    strategyAndTiming: string,
    msgStrategyAndTiming: string,
    socialIntegration: string,
    msgSocialIntegration: string,
    shoppingExperience: string,
    msgShoppingExperience: string,
    type: string,
    price: string,
    msgWishList: string,
    msgRegisterFirst: string,
}

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

export type typeDataCartsWhatWeDo = {
    image: StaticImageData;
    title: string;
    description: string;
}[]
