// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import Link from "next/link";

// import { redirect } from "next/navigation";

export default async function Home() {
  // const { isAuthenticated } = getKindeServerSession();

  // if (await isAuthenticated()) {
  //   redirect("/");
  // }
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  // console.log(posts);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center my-3">ALL POST {posts?.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="border-b rounded-lg text-center h-32 flex flex-col justify-between "
          >
            <h1>{post.title}</h1>
            <Link href={`/blog/${post.id}`}>
              <button className="bg-orange-500 btn uppercase text-white">
                view post
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
