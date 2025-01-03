"use client"
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { ProjectCard } from "@/app/_components/ProjectCard";
import { type Base } from "@prisma/client";
import { api } from "@/utils/api";
import Skeleton from "react-loading-skeleton";
import { Card } from "@/app/_components/Card";

interface ProjectListsProps {
  ownerId: string;
}
export const ProjectLists = (props: ProjectListsProps) => {
  const [base, setBase] = useState<Base[]>([]);
  const { data: currentBases, isLoading} = api.bases.getBasesByUserId.useQuery({ownerId: props.ownerId});

  useEffect(() => {
    if (currentBases) {
      setBase(currentBases);
    }
  }, [currentBases]);
  const ListBasesByDate = () => {
    if (isLoading) {
      const loadCards = Array(4).fill(1);
      return (
        loadCards.map((_,i) => (
          <Skeleton wrapper={Card} key={i}/>
        ))
      )
    }
    return (
      <div className={"gap-2 grid grid-cols-auto-fill-286 w-full"}>
        {
          base.map((base, index) => (
            <ProjectCard name={base.name} color={"#50d71e"} type={"base"} key={base.name+index}></ProjectCard>
          ))
        }
      </div>

    )
  }
  return (
    <div className={"w-full"}>
      {/* Menu Row */}
      <div>
        <div className={"flex w-fit justify-between items-center pb-4"}>
          <button className={"flex flex-row items-center mr-2"}><p>Opened by you</p><ChevronDown/> </button>
          <button className={"flex flex-row items-center mr-2"}><p>Show all types</p> <ChevronDown/></button>
        </div>
          <ListBasesByDate/>
      </div>
    </div>
  )
}