import image1 from "../shared/image-animation-1.png"
import image2_1 from "../shared/image-animation-2-1.png"
import image2_2 from "../shared/image-animation-2-2.png"
import image3 from "../shared/image-animation-3.png"
import { HeroTypes } from "../types"

export const heroData: HeroTypes = [
    {
        id: 1,
        image: image1,
        image2: "",
        title: "THINK DIFFERENT.",
        body: "Depot is a unique & captivating theme designed specifically for all types of shops and online stores."
    },
    {
        id: 2,
        image: image2_1,
        image2: image2_2,
        title: "PREMIUM COMFORT.",
        body: "One lick import feature lets you import the complete Depot demo content with a single mouse click.",
    },
    {
        id: 3,
        image: image3,
        image2: "",
        title: "CONTEMPORARY DESIGN.",
        body: "A large set of beautiful & fully flexible homepage layouts lets you create your website quickly & easily.",
    },
]