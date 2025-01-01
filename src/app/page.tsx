import Link from "next/link";

import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { NavBar } from "@/app/_components/NavBar";

export default async function Home() {
  const session = await auth();
  if (session == null) {
    return redirect("/api/auth/signin");
  }
  const name = session.user.name!;
  const email = session.user.email!;
  const image = session.user.image!;

  return (
    <HydrateClient>
      <NavBar/>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">

        <Image src={image} alt="Profile picture" width={100} height={100} />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          Hello {name}! @ {email}!
        </div>
      </main>
    </HydrateClient>
  );
}
