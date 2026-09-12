import Link from "next/link";

export const revalidate = 60;

export default async function Page() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  console.log("data", data);

  return (
    <div className="min-h-screen bg-gray-200  p-8">
      <h1 className="text-3xl font-bold text-center mb-8 t">
        Latest Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.posts.map((item) => (
          
          <div
            key={item.id}
            className="bg-blue-950 rounded-xl p-6 shadow-md border border-gray-200 "
          >
              <div className="flex gap-2">
                {
                item.tags.map((tag)=>(
                  <span key={tag} className="inline-block bg-blue-100 text-blue-600 
                             text-xs font-semibold px-3 py-1 rounded-full mb-3">#{tag}</span>
                ))
              }
              </div>
            

            <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
              {item.title}
            </h2>

            <p className="text-white leading-6 line-clamp-4">
              {item.body}
            </p>

            <div className="mt-5 pt-4 border-t border-gray-200">
          <Link href={`/article/${item.id}`
              } className="text-blue-600 font-semibold hover:text-blue-800" >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

