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
    null
  );
}
