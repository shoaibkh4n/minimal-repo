import Image from "next/image";
import { ReactNode } from "react";
import AuthBG from "@/assets/auth_bg_img.jpg";
function AuthenticationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <div className="fixed inset-0 bg-black opacity-60">
        <Image
          src={AuthBG}
          alt="Auth bg Img"
          className="absolute w-full h-full object-cover "
        />
      </div>
      <div className="grid place-items-center relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}

export default AuthenticationLayout;
