import Image from "next/image";
import bestItaly from '@/assets/best-italy.webp';
import ArrowIcon from "@/assets/icons/ArrowIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import DateIcon from "@/assets/icons/DateIcon";
import FoodIcon from "../assets/icons/FoodIcon";
import HumanIcon from "@/assets/icons/HumanIcon";


export default async function TopTourSummary() {

    return (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative w-full h-[300px] sm:h-[500px] lg:h-full">
                <Image 
                    alt="city" 
                    objectFit="cover"
                    layout="fill"
                    src={bestItaly}
                />
            </div>
            <div className="pr-4">
                <h2 className="pb-6 text-h2-title text-28px text-left">
                    13-Day Italy Sightseeing Tour of Rome, Lake Como and Sorrento
                </h2>
                <p>
                    Discover the Best of Italy, from the ancient treasures of Rome to Renaissance Florence and everything in between. Imagine staying overnight in a renovated Franciscan monastery in Assisi, lapping up the chic lifestyle on Capri, and taking a private guided visit to Pompeii to see a Roman city frozen in time
                </p>
                <div className="grid grid-cols-2 gap-4" style={{margin: '0.8rem 0 1.5rem'}}>
                    <div>
                        <span style={{fontWeight:'bold', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems:'center'}}>
                            <DateIcon width={'1.25rem'} height={'1.25rem'} style={{marginRight: '1rem'}}/>
                            Travel & Accommodation
                        </span>
                        <p>
                            13 days, 2 countries and 14 cities
                            12 nights accommodation
                        </p>
                    </div>

                    <div>

                        <span style={{fontWeight:'bold', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems:'center'}}>
                            <FoodIcon width={'1.25rem'} height={'1.25rem'} style={{marginRight: '1rem'}}/>
                            Meals
                        </span>
                        <p>
                            12 Breakfasts, 1 Be My Guest, 6 Dinners
                        </p>
                    </div>

                    <div>
                        <span style={{fontWeight:'bold', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems:'center'}}>
                            <HumanIcon width={'1.25rem'} height={'1.25rem'} style={{marginRight: '1rem'}}/>
                            Activity Level
                        </span>
                        <p>
                            Dynamic
                        </p>
                    </div>

                    <div>
                        <span style={{fontWeight:'bold', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems:'center'}}>
                            <LocationIcon width={'1.25rem'} height={'1.25rem'}/>
                            Itinerary
                        </span>
                        <p>
                            View day-by-day trip itinerary
                        </p>
                    </div>
                </div>
                <div className="border border-red rounded-md p-4 cursor-pointer mb-8">
                    <h2 className="text-h2-title mb-2 text-18px">Looking to book in a group of 15 or more?</h2>
                    <div className="flex justify-around items-center">
                        <p className="text-[14px]">
                            Deals, savings and exclusive private touring options available plus if you need a different date or itinerary change we can create a custom trip. Contact us for more details
                        </p>
                        <ArrowIcon style={{marginLeft: '1rem'}}/>
                    </div>
                </div>
                <p>
                    <strong>Trip code: </strong> WTBO
                </p>
            </div>
            
          </div>
    )

}