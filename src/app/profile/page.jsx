import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border rounded-lg shadow-lg">
      {user ? (
        <>
          <div className="flex flex-col items-center">
            <Image
              src={user?.picture || "No Image"}
              alt="User Avatar"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full shadow-md"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              {user?.given_name}
            </h2>
            <p className="text-gray-600">{user?.email}</p>
            <p className="mt-2 text-center text-gray-700">
              Hi, {user?.given_name} A passionate web developer and tech
              enthusiast who loves creating awesome web experiences.
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>
              This page is protected, please{" "}
              <Link className="text-lime-500" href="/api/auth/login">
                Login
              </Link>{" "}
              to view it
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
