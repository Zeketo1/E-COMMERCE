import slide1 from "/slide/slide1.png";
import slide2 from "/slide/slide2.jpg";
import slide3 from "/slide/slide3.png";
import slide3b from "/slide/slide3b.png";

export const slider = [
    {
        sliderHeader: "THINK DIFFERENT",
        quote: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,adipisci vel consequuntur ",
        image: [slide1],
        style: "max-h-[35rem] object-contain relative -top-18 z-[10]",
        initial: 550,
        end: 0,
    },
    {
        sliderHeader: "CONTEMPORARY DESIGN",
        quote: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,adipisci vel consequuntur ",
        image: [slide2],
        style: "w-98 max-h-[48rem] object-contain relative top-20 z-[10]",
        initial: 700,
        end: 0,
    },
    {
        sliderHeader: "PREMIUM COMFORT",
        quote: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,adipisci vel consequuntur",
        image: [slide3, slide3b],
        style: [
            "w-98 max-h-[50rem] object-contain relative -top-48 z-[10]",
            "relative -left-10 max-h-[20rem] object-contain z-[10]",
        ],
        initial: -600,
        end: 0,
    },
];
