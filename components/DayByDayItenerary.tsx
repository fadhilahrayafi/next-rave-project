'use client';
import { useState, useEffect, useCallback, useMemo } from "react";
import { getDayItinarery } from "@/sanity/sanity-utils";
import { DayItinarery, Experience } from "../types/Sanity";
import Image from "next/image";
import BusIcon from "../assets/icons/BusIcon";
import WelcomeIcon from "./WelcomeIcon";
import MoonIcon from "../assets/icons/MoonIcon";
import MealIcon from "../assets/icons/MealIcon";
import CheckmarkIcon from "@/assets/icons/CheckmarkIcon";
import QuestionMarkIcon from "@/assets/icons/QuestioMarkIcon";

BusIcon

export default function DayByDayItenerary() {
    const [areAllOpen, setAreAllOpen] = useState(false);
    const [listItinerary, setListItinerary] = useState<DayItinarery[]>([]);

    useEffect(() => {
        async function fetchListItinerary() {
            const itineraries = await getDayItinarery();
            setListItinerary(itineraries);
        }
        fetchListItinerary();
    }, []);

    const toggleAll = useCallback(() => {
        setAreAllOpen((prev) => !prev);
    }, []);

    const renderExperienceCards = useMemo(() => (experiences: Experience[]) => (
        <div className="overflow-x-auto">
            <div className="grid grid-flow-col gap-6 auto-cols-[minmax(353px,_1fr)] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {experiences.map((experience) => (
                    <div key={experience.name} className="w-[353px] bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg w-[353px]" src={experience.image} alt="" />
                        </a>
                        <div className="p-5 grid grid-cols-1 gap-3">
                            <h2 className="text-h2-title">{experience.name}</h2>
                            <span className="line-clamp-3">{experience.detail}</span>
                            <span style={{ fontWeight: 700, marginTop: '1rem', display: 'flex', gap: 6 }}>
                                {experience.isIncluded ? (
                                    <span className="text-[0.75rem] flex items-center gap-3">
                                        <CheckmarkIcon width="1.5rem" height="1.5rem" /> Included with trip
                                    </span>
                                ) : (
                                    <span className="text-[0.75rem] flex items-center justify-between w-full">
                                        Additional cost applies <QuestionMarkIcon width="1.5rem" height="1.5rem" />
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ), []);

    const renderIconSection = useMemo(() => (itinerary: DayItinarery) => (
        <div className="grid grid-cols-2 gap-6 text-[0.875rem]">
            {itinerary.isDepartureTransfer && (
                <div className="flex gap-3">
                    <BusIcon width="1.5rem" height="1.5rem" fill="#414141" />
                    <span>Arrival Transfer</span>
                </div>
            )}
            {itinerary.isWelcome && (
                <div className="flex gap-3">
                    <WelcomeIcon width="1.5rem" height="1.5rem" fill="#414141" />
                    <span>Welcome</span>
                </div>
            )}
        </div>
    ), []);

    return (
        <div className="py-6">
            <div className="text-center lg:text-left flex flex-col mb-[1.125rem]">
                <h2 className="pt-6 pb-1 text-h2-title text-28px">Day by day itinerary</h2>
                <p className="text-[0.875rem]">
                    13 days itinerary trip from Rome to Rome visiting 2 countries and 14 cities
                </p>
            </div>
            <div className="flex justify-end mb-4">
                <button
                    onClick={toggleAll}
                    className="px-4 py-2 text-[#414141] font-bold flex items-center"
                >
                    {areAllOpen ? "Collapse All Days" : "Expand All Days"}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`block ml-3 h-5 w-5 transition-transform duration-300 ${
                            areAllOpen ? "rotate-180" : ""
                        }`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </button>
            </div>
            <div className="mx-auto">
                {listItinerary.map((itinerary) => (
                    <div
                        key={itinerary._id}
                        className="divide-y overflow-hidden border group-open:border-[#2d5a7b] border-[#d9d9d9] rounded-md bg-white mb-3"
                    >
                        <details className="group" open={areAllOpen}>
                            <summary className="flex justify-between cursor-pointer list-none items-center text-lg font-medium group-open:bg-[#f5f5f5]">
                                <div className="flex items-center">
                                    <div className="relative w-[12.5rem] h-[11rem] transition-all duration-300 group-open:translate-x-[-100%]">
                                        <Image
                                            objectFit="cover"
                                            layout="fill"
                                            sizes=""
                                            src={itinerary.image}
                                            alt={itinerary.title}
                                        />
                                    </div>
                                    <div className="flex flex-col p-[1.5rem] transition-all duration-300 group-open:translate-x-[-55%]">
                                        <span style={{ fontSize: '1rem', marginBottom: '0.625rem' }}>{itinerary.name}</span>
                                        <h2 className="text-h2-title" style={{ fontSize: '16px', marginBottom: '0.625rem' }}>{itinerary.title}</h2>
                                        <span style={{ fontSize: '14px', marginBottom: '0.625rem' }}>{itinerary.places.join(' -> ')}</span>
                                        {renderIconSection(itinerary)}
                                    </div>
                                </div>
                                <div className="flex items-center pr-3">
                                    <div>
                                        <span className="group-open:hidden" style={{ fontSize: '16px', fontWeight: 700 }}>See more</span>
                                        <span className="hidden group-open:inline" style={{ fontSize: '16px', fontWeight: 700 }}>See less</span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </div>
                            </summary>
                            <div className="border-t border-t-stone-100 p-4">
                                <div className="flex flex-col justify-between p-6 lg:flex-row w-full">
                                    <div className="relative mb-6 w-full h-[300px] sm:h-[500px] lg:h-full lg:hidden">
                                        <Image
                                            alt="city"
                                            objectFit="cover"
                                            layout="fill"
                                            className="rounded-md"
                                            src={itinerary.image}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-3 lg:w-[70%] mr-6 text-[16px]">
                                        <span style={{ fontWeight: 600 }}>{itinerary.name}</span>
                                        <h2 className="text-h2-title text-28px">{itinerary.title}</h2>
                                        <span>{itinerary.detail}</span>
                                        <span className="flex gap-3">
                                            <MoonIcon width="1.5rem" height="1.5rem" fill="#414141" />
                                            <strong>Accommodation</strong> {itinerary.acomodation}
                                        </span>
                                        <span className="flex gap-3">
                                            <MealIcon width="1.5rem" height="1.5rem" fill="#414141" />
                                            <strong>Included Meals</strong> {itinerary.includedMeals}
                                        </span>
                                    </div>
                                    <div className="relative w-full max-w-[50%] max-h-auto mr-6 hidden lg:inline">
                                        <Image
                                            objectFit="cover"
                                            layout="fill"
                                            sizes=""
                                            style={{ borderRadius: '6px' }}
                                            src={itinerary.image}
                                            alt={itinerary.title}
                                        />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-h2-title text-28px">Included and optional experiences</h2>
                                    {renderExperienceCards(itinerary.experiences)}
                                </div>
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
}