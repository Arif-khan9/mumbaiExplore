import Link from "next/link";

import React from "react";

const PostArticals = async ({ params }) => {
  const { id } = await params;

  const post = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await post.json();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto w-full max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
          <div className="border-b border-gray-100 p-5 sm:p-8 md:p-10">
            <span
              className="inline-flex items-center rounded-full bg-blue-50
                         px-3 py-1 text-xs font-semibold text-blue-600
                         sm:text-sm"
            >
              Post #{id}
            </span>

            <h1
              className="mt-4 text-2xl font-bold leading-tight text-gray-900
                         sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {data.title}
            </h1>
          </div>

          <div className="p-5 sm:p-8 md:p-10">
            <p
              className="text-base leading-7 text-gray-600
                         sm:text-lg sm:leading-8 md:text-xl md:leading-9"
            >
              {data.body}
            </p>
              <div className="mt-8 flex flex-wrap gap-2 ">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1
                               text-xs font-medium text-gray-600
                               sm:text-sm "
                  >
                   <div className=" text-blue-600 bg-blue-50" >
                     #{tag}
                   </div>
                  </span>
                ))}
              </div>
          
          </div>

          <div
            className="flex flex-col gap-3 border-t border-gray-100
                       bg-gray-50 px-5 py-5
                       sm:flex-row sm:items-center sm:justify-between
                       sm:px-8 md:px-10"
          >
            <p className="text-sm text-gray-500">
              Article ID: <span className="font-semibold">{id}</span>
            </p>



            <Link href={"/article"}
              className="w-full rounded-lg bg-blue-600 px-5 py-2.5
                         text-sm font-semibold text-white
                         transition hover:bg-blue-700
                         sm:w-auto"
            >
              Back to Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default PostArticals;
