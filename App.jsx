/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

// RQ9
import { useState } from "react";
import { tvShows } from "./shows/data.js";
import ShowDetails from "./shows/ShowDetails.jsx";
import ShowSelection from "./shows/ShowSelection.jsx";


export default function App() {

  // RQ9
  const [shows] = useState(tvShows);

  // RQ10
  const [selectedShow, setSelectedShow] = useState(null);



  return (
    <>
      <header>
        <p>React TV</p>
        {/* RQ11, 12 */}
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        {/* RQ11, 12 */}
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
