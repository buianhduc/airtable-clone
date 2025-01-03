import { HTMLProps } from "react";

export const SideNavBar = (props: HTMLProps<HTMLDivElement>)=> {
  return (
    <nav className={props.className + " left-0 fixed h-screen w-fit min-w-10"}>
      {props.children}
    </nav>
  )
}