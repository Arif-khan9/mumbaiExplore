
"use client";

import { useState } from "react";

const Page = () => {
  const [placeSearch, setPlaceSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [place, setPlace] = useState(null);

  const handleSearchInput = (e) => {
    setPlaceSearch(e.target.value);
  };

  const handleSearch = async () => {
    if (!placeSearch.trim()) {
      return;
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        placeSearch
      )}&format=jsonv2&limit=1`
    );

    const data = await res.json();

    console.log("Place:", data);

    if (data.length === 0) {
      alert("Place not found");
      return;
    }

    const selectedPlace = data[0];
    setPlace(selectedPlace);

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${selectedPlace.lat}&longitude=${selectedPlace.lon}&current=temperature_2m,relative_humidity_2m,weather_code`
    );
    const weatherData = await weatherRes.json();
    setWeather(weatherData);
  };

  const handlesubmit=(e)=>{
     e.preventDefault();
     setPlaceSearch("")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-8 sm:px-6">

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          🌍 Place Weather Search
        </h1>

        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Search any city or place and check its current weather
        </p>
      </div>

      <form onSubmit={handlesubmit}>
        <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Enter city or place..."
          value={placeSearch}
          onChange={handleSearchInput}
          
          className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
        />

        <button
          onClick={handleSearch}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      </form>

      {weather && place && (
        <div className="mx-auto mt-10 w-full max-w-2xl">

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">

            <div className="text-center">

              <p className="text-sm font-medium uppercase tracking-wider text-blue-300">
                Current Weather
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                📍 {place.display_name}
              </h2>

            </div>

            <div className="mt-8 text-center">

              <p className="text-6xl font-bold text-white sm:text-7xl">
                {weather.current.temperature_2m}°
              </p>

              <p className="mt-2 text-lg text-slate-300">
                Celsius
              </p>

            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-white/10 p-5 text-center">
                <p className="text-3xl">🌡️</p>

                <p className="mt-2 text-sm text-slate-400">
                  Temperature
                </p>

                <p className="mt-1 text-xl font-semibold text-white">
                  {weather.current.temperature_2m}°C
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 text-center">
                <p className="text-3xl">💧</p>

                <p className="mt-2 text-sm text-slate-400">
                </p>

                <p className="mt-1 text-xl font-semibold text-white">
                  {weather.current.relative_humidity_2m}%
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 text-center sm:col-span-2">

                <p className="text-3xl">🌤️</p>

                <p className="mt-2 text-sm text-slate-400">
                  Weather Code
                </p>

                <p className="mt-1 text-xl font-semibold text-white">
                  {weather.current.weather_code}
                </p>

              </div>

            </div>

            <div className="mt-6 text-center text-sm text-slate-400">
              Latitude: {place.lat} | Longitude: {place.lon}
            </div>

          </div>
        </div>
      )}
      {!weather && (
        <div className="mx-auto mt-16 max-w-md text-center">

          <div className="text-6xl">
            🌦️
          </div>

          <h2 className="mt-4 text-xl font-semibold text-white">
            Search for a place
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Enter a city name above to see its current weather.
          </p>

        </div>
      )}

    </main>
  );
};

export default Page;

