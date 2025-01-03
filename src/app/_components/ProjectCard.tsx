import { Card } from "@/app/_components/Card";
import { EllipsisIcon, StarIcon } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  name: string;
  type: "base" | "interface";
  color: string;
}
export const ProjectCard = (props: ProjectCardProps) => {
  const [isHidingOption, setIsHidingOptions] = useState<boolean>(true);
  return (
    <Card
      className={"flex flex-row items-center justify-start"}
      onMouseEnter={() => setIsHidingOptions(false)}
      onMouseLeave={() => setIsHidingOptions(true)}
    >
      <div
        className={
          "flex h-[92px] w-[92px] min-w-[92px] flex-col items-center justify-center rounded text-white"
        }
      >
        <div
          style={{
            backgroundColor: props.color,
          }}
          className={
            "flex h-[52px] w-[52px] min-w-[52px] items-center justify-center rounded"
          }
        >
          <p className={"text-[22px]"}>
            {props.name.length >= 2 ? props.name.substring(0, 2) : props.name}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <div className={"flex flex-row justify-between items-center w-full"}>
          <h1 className={"font-bold"}>{props.name}</h1>
          {!isHidingOption && (
            <div className="flex flex-row items-center justify-center">
              <button>
                <StarIcon />
              </button>
              <button>
                <EllipsisIcon />
              </button>
            </div>
          )}
        </div>

        <span className={"text-sm font-light text-gray-800"}>
          {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
        </span>
      </div>

    </Card>
  );
}