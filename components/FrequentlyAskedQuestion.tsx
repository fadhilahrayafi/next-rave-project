'use client'
import { useState, useEffect } from "react";
import { getFrequentlyAskedQuestion } from "@/sanity/sanity-utils";
import { FrequentlyAskedQuestion as QuestionType } from "../types/Sanity"

export default function FrequentlyAskedQuestion() {
    const [listQuestions, setListQuestions] = useState<QuestionType[]>([]);
    const [areAllOpen, setAreAllOpen] = useState(false);

    useEffect(() => {
        async function fetchQuestions() {
            const questions = await getFrequentlyAskedQuestion();
            setListQuestions(questions);
        }
        fetchQuestions();
    }, []);

    const toggleAll = () => {
        setAreAllOpen(!areAllOpen);
    };

    return (
        <div>
            <h2 className="py-6 text-h2-title text-28px text-center lg:text-left">
                Frequently Asked Question
            </h2>
            <div style={{width: '100%', alignItems: 'right', display: 'flex', justifyContent: 'end'}} >
                    <button
                        onClick={toggleAll}
                        className="mb-4 px-4 py-2 text-[#414141]"
                        style={{fontWeight: 700, fontSize: '16px', display:'flex', alignItems: 'center'}}
                    >
                        {areAllOpen ? "Collapse All" : "Expand All"}
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
                {listQuestions.map((question) => (
                    <div
                        key={question._id}
                        className="divide-y overflow-hidden border border-b group-open:border-[#2d5a7b] border-[#e6e6e6] bg-white mb-1"
                    >
                        <details className="group" open={areAllOpen}>
                            <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium group-open:bg-[#2d5a7b] group-open:text-white">
                                {question.question}
                                <div className="">
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
                                {question.answer}
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
}