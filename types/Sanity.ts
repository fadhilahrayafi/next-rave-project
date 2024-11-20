import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}

export type SightseeingHighlights = {
    _id: string;
    _createdAt: Date;
    highlight: string;
    value: string;
}

export type TravelHighlight = {
    _id: string;
    _createdAt: Date;
    name: string;
}

export type FrequentlyAskedQuestion = {
    _id: string;
    _createdAt: Date;
    question: string;
    answer: string;
}

export type DayItinarery = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    title: string;
    detail: string;
    places: string[];
    isDepartureTransfer: boolean;
    isWelcome: boolean;
    image: string;
    isIncludeTrafalgarDifference: boolean;
    acomodation: string;
    includedMeals: string;
    experiences: Experience[]
}

export type Experience = {
    image: string;
    tag: string;
    name: string;
    detail: string;
    isIncluded: boolean;
}
