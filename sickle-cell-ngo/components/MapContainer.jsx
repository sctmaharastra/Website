import React from "react";

export default function MapContainer({ lat = 19.970324, lng = 79.30336, zoom = 100 }) {
  // small bbox around the point for the embed (degrees)
  const delta = 0.03; // adjust to control how zoomed-in the embedded map bbox looks
  const left = lng - delta;
  const right = lng + delta;
  const top = lat + delta;
  const bottom = lat - delta;

  // OpenStreetMap embed URL with marker
  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lng}`;

  // link to full map (useful for accessibility / fallback)
  const fullMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`;

  return (
    <div
      className="w-full rounded-md overflow-hidden border border-gray-200"
      style={{ aspectRatio: "16 / 9", maxHeight: 400 }}
    >
      <iframe
        title="Location map"
        src={embedUrl}
        style={{ border: 0, width: "100%", height: "100%" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {/* accessible link to open the map in a new tab */}
      <div className="text-xs text-gray-600 mt-1 text-center">
        <a
          href={fullMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Open larger map
        </a>
      </div>
    </div>
  );
}
