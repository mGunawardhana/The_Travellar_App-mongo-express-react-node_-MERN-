import {FaGithub, FaInstagram, FaYoutube} from "react-icons/fa";

//background images
import Gal01 from "../assets/gal/1.png";
import Gal02 from "../assets/gal/2.png";
import Gal03 from "../assets/gal/3.png";
import Gal07 from "../assets/gal/7.png";

//content images
import Feature1Img from "../assets/1.png";
import Feature2Img from "../assets/5.png";
import Feature3Img from "../assets/3.png";
import Feature4Img from "../assets/4.png";
import Feature6Img from "../assets/6.png";
import Feature7Img from "../assets/7.png";

//importing customers details
import Avatar1Img from "../assets/avatar1.png";
import Avatar2Img from "../assets/avatar2.png";
import Avatar3Img from "../assets/avatar3.png";

//about image
import AboutImg from "../assets/Untitled design(1).png";

//logo
import LogoV2 from "../assets/footer.png";

import {BsChatDotsFill} from "react-icons/bs";

export const navigationData = [
    {
        name: "About",
        href: "#",
    },
    {
        name: "Help",
        href: "#",
    },
    {
        name: "Features",
        href: "#",
    },
    {
        name: "Signup",
        href: "#",
    },
];

export const aboutData = {
    image: AboutImg,
    title: "Special Packages for Photographers!",
    subtitle:
        "Wildlife photography is a fascinating and thrilling genre of photography that requires patience, skill, and a love for nature. The beauty and diversity of the natural world provide endless opportunities to capture stunning images of animals in their natural habitats. Whether it's the grace of a cheetah on the African savannah, the majesty of a humpback whale breaching in the ocean, or the intricate details of a butterfly's wings, wildlife photography offers a chance to capture moments that will awe and inspire viewers. With the right equipment, technique, and knowledge of animal behavior, photographers can create images that convey the wonder and complexity of the natural world. So get out there and start exploring the wild, and who knows what amazing shots you'll come back with!.",
};

export const featuresData = {
    title: "Features",
    subtitle:
        "Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.",
    list: [
        {
            image: Feature1Img,
            title: "sample data",
            description:
                "Two nights in jungle with our crew members, You can see Jaguar's specially",
            linkText: "Learn more..",
            delay: "400",
        },
        {
            image: Feature2Img,
            title: "sample data",
            description:
                "Don’t worry if your if is very fresh, the Athena provides a best fruits you ever seen",
            linkText: "Learn more..",
            delay: "700",
        },
        {
            image: Feature3Img,
            title: "sample data",
            description:
                "Don’t worry if your if is very fresh, the Athena provides a best fruits you ever seen",
            linkText: "Learn more..",
            delay: "1000",
        },
        {
            image: Feature4Img,
            title: "sample data",
            description:
                "Don’t worry if your if is very fresh, the Athena provides a best fruits you ever seen",
            linkText: "Learn more..",
            delay: "1300",
        },
        {
            image: Feature6Img,
            title: "sample data",
            description:
                "Don’t worry if your if is very fresh, the Athena provides a best fruits you ever seen",
            linkText: "Learn more..",
            delay: "1000",
        },
        {
            image: Feature7Img,
            title: "sample data",
            description:
                "Don’t worry if your if is very fresh, the Athena provides a best fruits you ever seen",
            linkText: "Learn more..",
            delay: "1300",
        },
    ],
};

export const testimonialsData = [
    {
        image: Avatar1Img,
        name: "Abdul Rahuman",
        web: "rahuman.com",
        message:
            "sample text here frm your customer sample text here frm your customer sample text here frm your customer sample text here frm your customer sample text here frm your customer sample text here frm your customer",
        delay: "300",
    },
    {
        image: Avatar2Img,
        name: "Abdul Rahuman",
        web: "rahuman.com",
        message:
            "sample text here frm your customer sample text here frm your customer sample text here frm your customer sample text here frm your customer sample text here frm your customer sample text here frm your customer",
        delay: "300",
    },
    {
        image: Avatar3Img,
        name: "Abdul Rahuman",
        web: "rahuman.com",
        message:
            " sample text here frm your customer sample text here frm your customer sample text here frm your customer sample text here frm your customer sample text here frm your customer sample text here frm your customer",
        delay: "300",
    },
];

export const ctaData = {
    title: "Check it out!",
    subtitle: "sample text in here for you",
    btnText1: "learn more",
    btnText2: "Request free",
};

export const footerData = {
    logo: LogoV2,
    address: "No 327, Sarasavi Asapuwa, Wackwella, Galle.",
    email: "manee@gmail.com",
    phone: "071-9087765",
    list1: [
        {
            name: "Profile",
            href: "#",
        },
        {
            name: "Features",
            href: "#",
        },
        {
            name: "Partners",
            href: "#",
        },
        {
            name: "Others",
            href: "#",
        },
    ],
    list2: [
        {
            name: "Support",
            href: "#",
        },
        {
            name: "SignUp",
            href: "#",
        },
        {
            name: "Guide",
            href: "#",
        },
        {
            name: "Reports",
            href: "#",
        },
        {
            name: "Q & A",
            href: "#",
        },
    ],
    socialList: [
        {
            icon: typeof FaYoutube,
            href: "#",
        },
        {
            icon: typeof FaInstagram,
            href: "#",
        },
        {
            icon: typeof FaGithub,
            href: "#",
        },
    ],
};

export const copyrightData = {
    text: "© mGunawardhana™, 2020. All Right reserved. ",
    icon: typeof BsChatDotsFill,
};

export const galleryData = [
    {
        imagePack: Gal01,
    },
    {
        imagePack: Gal03,
    },
];
