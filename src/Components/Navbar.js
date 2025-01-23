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
      <nav className="container lili mx-auto text-white">
        <div>
          <h1 className="padding">WEB DEV</h1>
        </div>
        <div className="lili-gap">
          <Link className="padding" href="/">
            Home
          </Link>
          <Link className="padding" href="/about">
            About
          </Link>

          <Link className="padding" href="/contact">
            Contact US
          </Link>

          <Link className="padding" href="/profile">
            Profile
          </Link>
        </div>
        <div className="lili-gap">
          {user ? (
            <>
              <Link href="/dashboard">
                <button className="padding">Dashboard</button>
              </Link>
              <LogoutLink>
                <button className="padding">Log Out</button>
              </LogoutLink>
            </>
          ) : (
            <>
              <LoginLink postLoginRedirectURL="/profile">
                <button className="padding">Login</button>
              </LoginLink>
              <RegisterLink postLoginRedirectURL="/profile">
                <button className="padding" href="">
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
