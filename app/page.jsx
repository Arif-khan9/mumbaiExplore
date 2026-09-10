
import Link from "next/link";

export default async function Home() {

     const res =  await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current=temperature_2m,relative_humidity_2m,weather_code")
     const data = await res.json()
       console.log("data",data)
 
  return (
    <main className="min-h-screen bg-slate-50">
     
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">

          <div className="max-w-3xl">

            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              Welcome to Mumbai
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Explore the
              <span className="text-blue-500"> City of Dreams</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Discover famous landmarks, beautiful places, local attractions
              and hidden gems across Mumbai.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/places"
                className="rounded-xl bg-blue-600 px-7 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Places →
              </Link> 

              <Link
                href="/search"
                className="rounded-xl border border-slate-600 px-7 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
              >
                Search Places
              </Link>

            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-7xl px-5 sm:px-8">

        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm font-semibold text-blue-600">
                MUMBAI WEATHER
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Mumbai, Maharashtra
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Current weather information
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-xl bg-slate-50 px-6 py-4">
                <p className="text-sm text-slate-500">
                  weather
                
                </p>
                <p className="mt-1 text-2xl font-bold">
                  {data?.current?.temperature_2m}°C
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 px-6 py-4">
                <p className="text-sm text-slate-500">
                  Humidity
                </p>
                <p className="mt-1 text-2xl font-bold">
                  {data?.current?.relative_humidity_2m}%
                </p>
              </div>

              <div className="col-span-2 rounded-xl bg-blue-50 px-6 py-4 sm:col-span-1">
                <p className="text-sm text-slate-500">
                  Condition
                </p>
                <p className="mt-1 text-lg font-bold text-blue-600">
                  Partly Cloudy
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Discover Mumbai
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Places
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Explore some of the most popular destinations in Mumbai.
            </p>
          </div>

          

        </div>

     
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

         
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 text-7xl">
              
            </div>

            <div className="p-5">
              <p className="text-sm text-blue-600">
                Colaba, Mumbai
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Gateway of India
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                One of Mumbai,s most famous historical landmarks.
              </p>

              
            </div>

          </div>

      
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-400 text-7xl">
              
            </div>

            <div className="p-5">
              <p className="text-sm text-blue-600">
                South Mumbai
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Marine Drive
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Enjoy beautiful sea views and amazing sunsets.
              </p>

             
            </div>

          </div>

         
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-orange-400 to-yellow-300 text-7xl">
              
            </div>

            <div className="p-5">
              <p className="text-sm text-blue-600">
                Elephanta Island
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Elephanta Caves
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore ancient caves and historic sculptures.
              </p>

              
            </div>

          </div>

        
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-purple-500 to-pink-400 text-7xl">
              
            </div>

            <div className="p-5">
              <p className="text-sm text-blue-600">
                Prabhadevi
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Siddhivinayak Temple
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                A famous and beautiful temple in Mumbai.
              </p>

             
            </div>

          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">

        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center sm:px-12 sm:py-16">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Discover More Places in Mumbai
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Find interesting places, landmarks and attractions around the
            city.
          </p>

          

        </div>

      </section>

     
     

    </main>
  );
}
