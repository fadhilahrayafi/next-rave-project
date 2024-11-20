import DayByDayItenerary from "@/components/DayByDayItenerary";
import FrequentlyAskedQuestion from "@/components/FrequentlyAskedQuestion";
import SightseeingHighlights from "@/components/SightseeingHighlights";
import TopTourSummary from "@/components/TopTourSummary";
import TravelHighlights from "@/components/TravelHighlights";

export default async function Home() {

  return (
    <div className="mx-auto py-10 px-6">
      <TopTourSummary/>
      <DayByDayItenerary/>
      <SightseeingHighlights/>
      <TravelHighlights/>
      <FrequentlyAskedQuestion/>
    </div>
  );
}

