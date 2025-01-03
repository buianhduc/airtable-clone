import Image from "next/image";
import { AddButton } from "@/app/_containers/AddButton";
import { auth } from "@/server/auth";
import { api } from "@/trpc/server"
import { Card } from "@/app/_components/Card";
import { QuickAccessLinks } from "@/app/_containers/_homePageContainer/QuickAccessLinks";
import { ProjectLists } from "@/app/_containers/_homePageContainer/ProjectLists";
import { SideNavBar } from "@/app/_components/SideNavBar";
import { BookOpen, Globe, HomeIcon, PlusIcon, ShoppingBag, User } from "lucide-react";

export default async function HomePage() {
  // const { data: session, status } = useSession();
  const session = await auth();
  if (!session) {
    return (<div>No data</div>)
  }
  const name = session.user?.name;
  const email = session.user.email!;
  const image = session.user.image!;
  const id = session.user.id;
  const getBases = await api.bases.getBasesByUserId({ ownerId: session.user.id });
  return (

    <main
      className="flex min-h-screen w-full flex-col justify-start bg-gray-50 min-w-[480px] border-black pt-8 px-12">

      <div className="flex flex-col w-full justify-center gap-12">
        <h1 className={"font-extrabold text-3xl"}>Home</h1>
        <QuickAccessLinks />
      </div>
      <div className="min-w-screen flex flex-row flex-wrap">


        <ProjectLists ownerId={id}></ProjectLists>
      </div>
    </main>

  )
}


// <div className={"border-gray-200 h-full w-[47px]"}>
//   <SideNavBar className={"bg-white flex flex-col items-center h-full left-0 justify-between"}>
//     <div className={"pt-3"}>
//       <HomeIcon strokeWidth={2} />
//       <User />
//     </div>
//
//
//     <div className="flex flex-col">
//       <BookOpen />
//       <ShoppingBag />
//       <Globe />
//       <PlusIcon />
//     </div>
//   </SideNavBar>
// </div>