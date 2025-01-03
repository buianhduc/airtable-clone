import React from "react";
import AILogo from 'public/Icons/AIIcon.svg'
import { Card } from "@/app/_components/Card";
import Image from "next/image";
import { Grid2X2Icon, MoveUpIcon, SparkleIcon, Table2Icon } from "lucide-react";
interface QuickAccessLinksItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const links: QuickAccessLinksItem[] = [
  {
    icon: <SparkleIcon color="pink"/>,
    title: "Start with AI",
    description: "Turn your process into an app with data and interfaces using AI"
  },
  {
    icon: <Grid2X2Icon color="purple"/>,
    title: "Start with templates",
    description: "Select a template to get started and customize as you go"
  },
  {
    icon: <MoveUpIcon color="green"/>,
    title: "Quickly upload",
    description: "Easily migrate your existing projects in just a few minutes"
  },
  {
    icon: <Table2Icon color="blue"/>,
    title: "Start from scratch",
    description: "Create a new blank base with custom tables, fields, and views"
  },
]
export const QuickAccessLinks = () => {
  return (
    <div className={"gap-2 grid grid-cols-auto-fit-250 mb-4"}>
      {links.map((link, i) =>
        <Card className={"flex flex-col justify-center p-4 bg-white"} key={i}>
          <div className="flex flex-row items-start">
            {link.icon}
            <p className={"font-bold pl-1"}>{link.title}</p>
          </div>
          <p className={"mt-0.5"}>{link.description}</p>
        </Card>) }
    </div>
    );
}