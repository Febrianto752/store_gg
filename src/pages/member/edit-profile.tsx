import Input from "@/components/atoms/input";
import SideBar from "@/components/organisms/SideBar";
import Image from "next/image";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { jwtDecode } from "jwt-decode";
import { updateProfile } from "@/services/member";

interface UserStateTypes {
  id: string;
  name: string;
  email: string;
  avatar: any;
  phoneNumber?: string;
}
export default function EditProfile() {
  const [user, setUser] = useState<UserStateTypes>({
    id: "",
    name: "",
    email: "",
    avatar: "",
    phoneNumber: "",
  });
  const [imagePreview, setImagePreview] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      setUser(userFromPayload);
    }
  }, []);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = new FormData();

    data.append("image", user.avatar);
    data.append("name", user.name);
    data.append("phoneNumber", user.phoneNumber ?? "belum diset");
    const response = await updateProfile(data, user.id);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success("Berhasil mengupdate profile, silakan login kembali");
      Cookies.remove("token");
      router.replace("/sign-in");
    }
  };
  const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_IMG;
  return (
    <section className="edit-profile overflow-auto">
      <SideBar activeMenu="Settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form onSubmit={onSubmit}>
              <div className="photo d-flex">
                <div className="image-upload position-relative me-20">
                  <label htmlFor="avatar">
                    {imagePreview === "/" ? (
                      <Image
                        src={`${BASE_URL_IMAGE}/${user.avatar}`}
                        alt="icon upload"
                        width={90}
                        height={90}
                        style={{ borderRadius: "100%" }}
                      />
                    ) : (
                      <Image
                        src={`${imagePreview}`}
                        alt="icon upload"
                        width={90}
                        height={90}
                        style={{ borderRadius: "100%" }}
                      />
                    )}
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <Image
                        src={"/icon/upload.svg"}
                        width={40}
                        height={40}
                        alt="trash icon"
                        className="hover-cursor-pointer"
                      />
                    </div>
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files![0];
                      if (
                        event.target.files &&
                        event.target.files.length !== 0
                      ) {
                        setImagePreview(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }
                      // setImagePreview(URL.createObjectURL(img));
                      return setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  value={user.name}
                  onChange={(event) =>
                    setUser({
                      ...user,
                      name: event.target.value,
                    })
                  }
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email Address"
                  id="email"
                  name="email"
                  aria-describedby="email"
                  placeholder="Enter your email address"
                  readOnly
                  defaultValue={user.email}
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Phone"
                  id="phone"
                  name="phone"
                  aria-describedby="phone"
                  placeholder="Enter your phone number"
                  value={user.phoneNumber}
                  onChange={(event) =>
                    setUser({
                      ...user,
                      phoneNumber: event.target.value,
                    })
                  }
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
