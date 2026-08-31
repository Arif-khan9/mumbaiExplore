import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

          <Link href="/" className="text-2xl font-bold text-blue-600">
            Mumbai<span className="text-slate-900">Explorer</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="font-medium text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/places"
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              Places
            </Link>

            <Link
              href="/search"
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              Search
            </Link>

            <Link
              href="/about"
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              About
            </Link>
          </div>

          <button className="rounded-lg border border-slate-200 px-3 py-2 text-xl md:hidden">
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">

          <div className="max-w-3xl">

            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              🌆 Welcome to Mumbai
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

      {/* Weather Card */}
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
                  Temperature
                </p>
                <p className="mt-1 text-2xl font-bold">
                  28°C
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 px-6 py-4">
                <p className="text-sm text-slate-500">
                  Humidity
                </p>
                <p className="mt-1 text-2xl font-bold">
                  72%
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

      {/* Featured Places */}
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

          <Link
            href="/places"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            View All →
          </Link>

        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 text-7xl">
              🏛️
            </div>

            <div className="p-5">
              <p className="text-sm text-blue-600">
                Colaba, Mumbai
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Gateway of India
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                One of Mumbai's most famous historical landmarks.
              </p>

              <Link
                href="/places/gateway-of-india"
                className="mt-4 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>
            </div>

          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-400 text-7xl">
              🌊
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

              <Link
                href="/places/marine-drive"
                className="mt-4 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>
            </div>

          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-orange-400 to-yellow-300 text-7xl">
              ⛰️
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

              <Link
                href="/places/elephanta-caves"
                className="mt-4 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>
            </div>

          </div>

          {/* Card 4 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-purple-500 to-pink-400 text-7xl">
              🛕
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

              <Link
                href="/places/siddhivinayak-temple"
                className="mt-4 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">

        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center sm:px-12 sm:py-16">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Discover More Places in Mumbai
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Find interesting places, landmarks and attractions around the
            city.
          </p>

          <Link
            href="/search"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Search Mumbai →
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-center text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Mumbai Explorer
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>

        </div>

      </footer>

    </main>
  );
}