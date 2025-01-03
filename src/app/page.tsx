import {HydrateClient} from "@/trpc/server";
import { redirect } from "next/navigation";
import { TopNavBar } from "@/app/_components/TopNavBar";
import { auth } from "@/server/auth";
import HomePage from "@/app/_containers/HomePage";
import HomeNavigationBar from "@/app/_containers/HomeNavigationBar";
import { SideNavBar } from "@/app/_components/SideNavBar";
import css from "styled-jsx/css";



export default async function Home() {
  const session = await auth();
  if (!session) {
    return redirect("/api/auth/signin");
  }

  return (
    <HydrateClient>
      {/*<div className={"flex flex-col h-full homescreen"}>*/}
        <HomeNavigationBar AccountAvatarURL={session.user.image ??= undefined} />
        <HomePage/>
      {/*</div>*/}

    </HydrateClient>
  );
}
