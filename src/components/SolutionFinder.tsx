import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const challenges = [
  { id: "new-facility", label: "Starting a new facility" },
  { id: "upgrade", label: "Upgrading existing equipment" },
  { id: "efficiency", label: "Improving efficiency" },
  { id: "compliance", label: "Meeting compliance standards" },
  { id: "expansion", label: "Expanding production capacity" },
  { id: "costs", label: "Reducing operational costs" }
];

export function SolutionFinder() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleGetRecommendations = () => {
    if (selected) {
      navigate('/enquiry', { state: { challenge: selected } });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#1e3a8a] mb-4">Find Your Perfect Solution in 60 Seconds</h2>
          <p className="text-gray-600 mb-8">
            Tell us about your needs and get personalized recommendations
          </p>

          <div>
            <p className="text-left mb-4">What's your primary challenge?</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {challenges.map((challenge) => (
                <button
                  key={challenge.id}
                  onClick={() => setSelected(challenge.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selected === challenge.id
                      ? 'border-[#f97316] bg-[#f97316]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selected === challenge.id
                        ? 'border-[#f97316]'
                        : 'border-gray-300'
                    }`}>
                      {selected === challenge.id && (
                        <div className="w-3 h-3 rounded-full bg-[#f97316]"></div>
                      )}
                    </div>
                    <span className="text-gray-700">{challenge.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-[#f97316] hover:bg-[#ea580c] text-white gap-2"
              disabled={!selected}
              onClick={handleGetRecommendations}
            >
              Get Recommendations
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
