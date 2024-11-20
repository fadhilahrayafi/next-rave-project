import LocationIcon from "@/assets/icons/LocationIcon";
import { getSightseeingHighlights } from "@/sanity/sanity-utils";

export default async function SightseeingHighlights() {
    const listSightseeing = await getSightseeingHighlights()

    return (
        <div className="border-b border-red pb-[3rem] mb-[3rem]">
          <h2 className="py-6 text-h2-title text-28px text-center lg:text-left">About this trip</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-[30%_70%]">
            <h2 className="text-h2-title text-[1.5rem] text-center lg:text-left" style={{color: 'rgb(75, 107, 53)', marginBottom: '1rem'}}>Sightseeing highlights</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
                {
                    listSightseeing.map((activity) => (
                        <div key={activity._id} className="detailed-highlights-item">
                            <LocationIcon width={'2.5rem'} height={'2.5rem'} fill="#4b6b35"/>
                            <p>
                                <strong>{activity.highlight}</strong> {activity.value}
                            </p>
                        </div>
                    ))
                }
            </div>
          </div>
      </div>
    )

}