import { useEffect } from "react";

const Map = ({ isOpen, closeMap }) => {
  useEffect(() => {
    if (isOpen) {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 27.7113, lng: 85.3206 }, // Latitude and Longitude of Anamnagar, Kathmandu
        zoom: 15,
      });

      // Marker for the location
      new window.google.maps.Marker({
        position: { lat: 27.7113, lng: 85.3206 },
        map: map,
        title: "Anamnagar, Kathmandu",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-11/12 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Location: Anamnagar, Kathmandu</h2>
        <div id="map" className="h-64 mb-4" />
        <button onClick={closeMap} className="bg-blue-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Map;
