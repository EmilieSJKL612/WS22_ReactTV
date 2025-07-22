import "./shows.css";

/** A navbar that allows users to choose between a list of shows */

// RQ6
export default function ShowSelection({ shows, setSelectedShow }) 

  // RQ8
  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

{
  return (
    <nav className="shows">
      {shows.map((show) => (
        // RQ7
        <a
          key={show.name}  
          className="show"  
          onClick={() => handleShowClick(show)}  
        >
          {show.name}  
        </a>
      ))}
    </nav>
  );
}
