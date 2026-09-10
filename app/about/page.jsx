
export default function AboutPage() {
  const technologies = [
    "Next.js",
    "React",  
    "TypeScript",
    "Tailwind CSS",
    "Nominatim",
    "Open-Meteo",
    "DummyJSON",
  ];

  const renderingStrategies = [
    {
      title: "SSG",
      description:
        "Static pages are generated ahead of time. Best for content that does not change frequently.",
      example: "/about",
    },
    {
      title: "ISR",
      description:
        "Pages are cached and regenerated after a specific interval. Useful when data changes periodically.",
      example: "/places, /articles",
    },
    {
      title: "SSR",
      description:
        "Data is fetched on the server when a user requests the page, providing fresh server-rendered content.",
      example: "/places/[id]",
    },
    {
      title: "CSR",
      description:
        "Data is fetched and updated in the user's browser using React client-side features.",
      example: "/search",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-400">
            Next.js App Router Project
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Mumbai Explorer
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Explore Mumbai's popular places, search locations, check weather,
            and discover articles — while learning how different rendering
            strategies work in Next.js.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            About the App
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Mumbai Explorer is a learning project built with Next.js App
            Router. The main goal of this project is to understand how
            Server Components, Client Components, data fetching, caching,
            dynamic routes, and different rendering strategies work together.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            What You Can Do
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Explore Places",
                text: "Discover popular places around Mumbai.",
              },
              {
                title: "Search",
                text: "Search for locations using Nominatim.",
              },
              {
                title: "Check Weather",
                text: "View weather data using Open-Meteo.",
              },
              {
                title: "Read Articles",
                text: "Browse sample articles using DummyJSON.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Next.js Rendering Strategies
            </h2>

            <p className="mt-2 text-gray-600">
              This project demonstrates four important rendering approaches.
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {renderingStrategies.map((strategy) => (
              <div
                key={strategy.title}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {strategy.title}
                  </h3>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {strategy.example}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-14 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            React & Next.js
          </h2>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                React
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                React is used to build reusable UI components. In this project,
                React components are used for cards, navigation, search
                interactions, and displaying API data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Next.js
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Next.js provides the application structure, App Router,
                Server Components, dynamic routes, server-side data fetching,
                caching, and rendering strategies.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            Technologies Used
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border bg-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border bg-gray-900 p-8 text-white">
          <h2 className="text-2xl font-bold">
            Project Goal
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-300">
            The purpose of Mumbai Explorer is not only to build pages, but to
            understand where rendering happens, when data is fetched, how
            caching works, and when to use Server Components or Client
            Components in a Next.js application.
          </p>
        </section>
      </div>
    </main>
  );
}

