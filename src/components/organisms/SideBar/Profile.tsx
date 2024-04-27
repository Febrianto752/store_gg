import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { jwtDecode } from "jwt-decode";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: "",
    username: "",
    email: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);

      const userFromPayload: UserTypes = payload.player;
      if (!payload.player.avatar) {
        userFromPayload.avatar = "user.png";
      }
      setUser(userFromPayload);
    }
  }, []);
  const BASE_URL_IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={`${BASE_URL_IMG}/${user.avatar}`}
        width={80}
        height={80}
        className="img-fluid mb-20"
        alt="profile"
        style={{ borderRadius: "100%" }}
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
