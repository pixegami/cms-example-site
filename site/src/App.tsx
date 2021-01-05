import React from "react";
import "./index.css";
import cycloneContent from "./content.json";

function App() {
  const [liveItems, setLiveItems] = React.useState<string[]>([]);
  const liveItemDisplay = [];

  for (let i: number = 0; i < liveItems.length; i++) {
    const itemElement = (
      <li
        key={i}
        className="my-2 border-l-4 border-blue-500 py-2 px-4 bg-blue-700 bg-opacity-20"
      >
        {liveItems[i]}
      </li>
    );
    liveItemDisplay.push(itemElement);
  }

  const loadingSpinner = (
    <svg className="animate-spin h-8 w-8 mx-auto mb-4" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" />
    </svg>
  );

  const contentElement =
    liveItems.length > 0 ? (
      <ul className="text-blue-300">{liveItemDisplay}</ul>
    ) : (
      loadingSpinner
    );

  React.useEffect(() => {
    let mounted = true;
    fetchLiveContent().then((liveContent) => {
      if (mounted) {
        const payload = JSON.parse(liveContent.payload);
        console.log(payload.items);
        setLiveItems(payload.items);
      }
    });

    const cleanUp = () => {
      mounted = false;
    };

    return cleanUp;
  }, []);

  return (
    <div className="container mx-auto bg-gray-800 max-w-screen-sm mt-6 p-6 rounded-md">
      <header className="">
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          {cycloneContent.title}
        </h1>
        <p className="text-gray-300 text-lg mb-4 text-center">
          {cycloneContent.body}
        </p>
        {contentElement}
      </header>
    </div>
  );
}

const fetchLiveContent = () => {
  return fetch("https://api.cyclonecms.com/getContent?key=cyclonecmslive", {
    method: "GET",
  }).then((data) => data.json());
};

export default App;
