import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import SocialAuth from "@/components/auth/SocialAuth";
import Link from "next/link";
import { Button } from "../ui/button";

type AuthWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  additionalBtnLabel: string;
  additionalBtnHref: string;
  showSocialAuth?: boolean;
};

function AuthWrapper({
  children,
  headerLabel,
  additionalBtnLabel,
  additionalBtnHref,
  showSocialAuth,
}: AuthWrapperProps) {
  return (
    <Card className="w-[50%] min-w-[350px] max-w-[400px]">
      <CardHeader>{headerLabel}</CardHeader>
      <CardContent>{children}</CardContent>
      {showSocialAuth && (
        <CardFooter>
          <SocialAuth />
        </CardFooter>
      )}
      <CardFooter>
        <Button variant={"link"}>
          <Link href={additionalBtnHref}>{additionalBtnLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AuthWrapper;
