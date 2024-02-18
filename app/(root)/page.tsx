import { ModeToggle } from "@/components/Theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-semibold text-xl pt">
      hi from root <ModeToggle />{" "}
      <Button variant={"link"}>
        {" "}
        <Link href={"/auth/login"}>Go to Login</Link>{" "}
      </Button>
    </main>
  );
}
