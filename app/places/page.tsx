export const revalidate = 60;

export default async function Page() {
  const res = await fetch(
    "https://nominatim.openstreetmap.org/search?q=Gateway+of+India,+Mumbai&format=jsonv2",
    {
      headers: {
        "User-Agent": "MumbaiExplorer/1.0",
      },
    }
  );

  const data = await res.json();

  const place = data[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-5 py-12">
      <div className="mx-auto max-w-5xl">
 
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Mumbai Explorer
          </p>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Place Information
          </h1>

          <p className="mt-3 text-slate-400">
            Explore location details of famous places in Mumbai
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">

          <div className="border-b border-white/10 bg-white/5 px-6 py-7 md:px-10">
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 text-3xl">
                📍
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Gateway of India
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Mumbai, Maharashtra, India
                </p>
              </div>

            </div>
          </div>

          <div className="grid gap-5 p-6 md:grid-cols-2 md:p-10">

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-white/10">
              <p className="mb-2 text-sm font-medium text-slate-400">
                Place Name
              </p>

              <p className="text-lg font-semibold text-white">
                {place.display_name}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-white/10">
              <p className="mb-2 text-sm font-medium text-slate-400">
                Latitude
              </p>

              <p className="text-lg font-semibold text-white">
                {place.lat}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-white/10">
              <p className="mb-2 text-sm font-medium text-slate-400">
                Longitude
              </p>

              <p className="text-lg font-semibold text-white">
                {place.lon}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-white/10">
              <p className="mb-2 text-sm font-medium text-slate-400">
                Type
              </p>

              <p className="text-lg font-semibold capitalize text-white">
                {place.type}
              </p>
            </div>

          </div>

          <div className="border-t border-white/10 px-6 py-5 md:px-10">
            <div className="flex flex-wrap items-center justify-between gap-3">

              <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                ● Location Found
              </span>

              <span className="text-sm text-slate-500">
                Data from OpenStreetMap
              </span>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}