import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const NavbarPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // console.log(user);
  return (
    <div className="bg-lime-500 px-8">
      <nav className="container mx-auto flex gap-8 flex-wrap md:flex-nowrap md:justify-between items-center py-4 text-white">
        <div>
          <h1 className="px-4 py-2 rounded-lg font-semibold border">WEB DEV</h1>
        </div>
        <div className="space-x-4">
          <Link className="px-4 py-2 rounded-lg font-semibold border" href="/">
            Home
          </Link>
          <Link
            className="px-4 py-2 rounded-lg font-semibold border"
            href="/about"
          >
            About
          </Link>

          <Link
            className="px-4 py-2 rounded-lg font-semibold border"
            href="/contact"
          >
            Contact US
          </Link>

          <Link
            className="px-4 py-2 rounded-lg font-semibold border"
            href="/profile"
          >
            Profile
          </Link>
        </div>
        <div className="space-x-4">
          {user ? (
            <>
              <Link href="/dashboard">
                <button className="px-4 py-2 rounded-lg font-semibold border">
                  Dashboard
                </button>
              </Link>
              <LogoutLink>
                <button className="px-4 py-2 rounded-lg font-semibold border">
                  Log Out
                </button>
              </LogoutLink>
            </>
          ) : (
            <>
              <LoginLink postLoginRedirectURL="/profile">
                <button className="px-4 py-2 rounded-lg font-semibold border">
                  Login
                </button>
              </LoginLink>
              <RegisterLink postLoginRedirectURL="/profile">
                <button
                  className="px-4 py-2 rounded-lg font-semibold border"
                  href=""
                >
                  Register
                </button>
              </RegisterLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
