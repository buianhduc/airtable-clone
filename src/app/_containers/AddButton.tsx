"use client"
import { handleCreateBase } from "@/actions";
type AddButtonProps= {
  id: string;
}
export const AddButton = ( props :AddButtonProps) => {
  return (<button onClick={() => handleCreateBase(props.id)}>Add a base</button>);
};