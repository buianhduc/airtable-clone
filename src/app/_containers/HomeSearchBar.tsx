import { SearchBar } from "@/app/_components/SearchBar";
import { SearchIcon } from "lucide-react";
import { className } from "postcss-selector-parser";

type HomeSearchBarProps = {
  children?: React.ReactNode;
  className?: string;
}
export const HomeSearchBar = (props:HomeSearchBarProps) => {
  return (
    <SearchBar className={"flex flex-row items-center justify-between px-4 w-full max-w-xs " + props.className}>
        <SearchIcon className={"flex-none"} width={16} height={16} color={"gray"}/>
        <p className={"ml-1 flex-auto text-gray-700"}>Search...</p>
      <p>⌘ K</p>
    </SearchBar>
  )
}