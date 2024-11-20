import { FrequentlyAskedQuestion, Project, TravelHighlight, SightseeingHighlights, DayItinarery } from "@/types/Sanity";
import { createClient, groq } from "next-sanity";

const clientSanity = createClient({
    projectId: 'hgzhbyg5',
    dataset: 'production',
    apiVersion: '2024-12-15',
});

export async function getProjects(): Promise<Project[]> {
    const client = clientSanity

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

export async function getSightseeingHighlights(): Promise<SightseeingHighlights[]> {
    const client = clientSanity

    return client.fetch(
        groq`*[_type == "sightseeingHighlight"]{
            _id,
            _createdAt,
            highlight,
            value
        }`
    )
}

export async function getTravelHighlights(): Promise<TravelHighlight[]> {
    const client = clientSanity

    return client.fetch(
        groq`*[_type == "travelHighlight"]{
            _id,
            _createdAt,
            name
        }`
    )
}

export async function getFrequentlyAskedQuestion(): Promise<FrequentlyAskedQuestion[]> {
    const client = clientSanity

    return client.fetch(
        groq`*[_type == "frequentlyAskedQuestion"]{
            _id,
            _createdAt,
            question,
            answer
        }`
    )
}

export async function getDayItinarery(): Promise<DayItinarery[]> {
    const client = clientSanity

    return client.fetch(
        groq`*[_type == "dayItinarery"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            title,
            detail,
            places,
            isDepartureTransfer,
            isWelcome,
            "image": image.asset->url,
            isIncludeTrafalgarDifference,
            acomodation,
            includedMeals,
            experiences[] {
                "image": image.asset->url,
                tag,
                name,
                detail,
                isIncluded
            }
        }`
    )
}
