
import "./shows.css";

import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";


/** Allows users to browse through the episodes of the given show */

// RQ1
export default function ShowDetails({ show }) {

  // RQ2
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // RQ3
  if (!show) {
    return (
      <div className="show-details">
        <h2>Welcome to React TV</h2>
        <p>Please select a show from the navigation above to get started!</p>
      </div>
    );
  }


  // RQ4
  return (
  <div className="show-details">
    {/* RQ5 */}
    <EpisodeList
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
    />
      <EpisodeDetails episode={selectedEpisode} />
  </div>
  );
}
