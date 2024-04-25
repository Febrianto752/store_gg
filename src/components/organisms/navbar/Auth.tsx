import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import Cookies from "js-cookie";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: `${process.env.NEXT_PUBLIC_API}/images/no_image.jpg`,
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      if (userFromPayload.avatar) {
        console.log("ada avatar");
        setUser({
          avatar: `${process.env.NEXT_PUBLIC_IMG}/${userFromPayload.avatar}`,
        });
      }
      setIsLogin(true);
    }
  }, []);

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              src={user.avatar}
              width={40}
              height={40}
              alt="avatar"
              className="rounded-circle"
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item text-lg color-palette-2" href="/">
                Wallet
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member/edit-profile"
              >
                Account Settings
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/sign-in"
              >
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
        href="/sign-in"
        role="button"
      >
        Sign In
      </Link>
    </li>
  );
}
