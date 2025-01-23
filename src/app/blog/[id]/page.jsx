import Link from "next/link";

const BlogDetails = async ({ params }) => {
  const { id } = await params;
  // console.log("sdfgsodgsdjf", id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  // console.log(posts);
  return (
    <div>
      <h1 className="text-4xl text-center py-12 font-bol">Blog Details</h1>
      <div className="space-y-4 w-[50%] mx-auto">
        <h4 className="font-bold text-2xl text-center">{posts.title}</h4>
        <p className="text-center">{posts.body}</p>
        <div className="mt-6">
          <Link href="/" className="text-orange-500 hover:text-orange-600">
            ← Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
