import CheckmarkIcon from "@/assets/icons/CheckmarkIcon";
import { getTravelHighlights } from "@/sanity/sanity-utils";

export default async function TravelHighlights() {
    const listTravels = await getTravelHighlights();

    return (
        <div>
          <div className="grid md:grid-cols-1 lg:grid-cols-[30%_70%]">
            <div>
                <h2 className="text-h2-title text-[1.5rem] text-center lg:text-left" style={{color: 'rgb(167, 40, 46)', marginBottom: '1rem'}}>Travel highlights</h2>
                <p className="text-center lg:text-left text-sm" style={{color: '#6b6b6b', marginBottom: '1rem'}}>Specific transfer information can be found here:</p>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
                {
                    listTravels.map((travel) => (
                        <div key={travel._id} className="detailed-highlights-item">
                            <CheckmarkIcon width={'2.5rem'} height={'2.5rem'} fill="#a7282e"/>
                            <p className="ml-3">{travel.name}</p>
                        </div>
                    ))
                }
            </div>
          </div>
      </div>
    )

}