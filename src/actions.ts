"use server"
import { api } from "@/trpc/server";
import { revalidatePath } from "next/cache";

export const handleCreateBase = async (id: string) => {
  api.bases.createNewBaseWithUserId({ ownerId: id })
    .then(() => {
      alert("Created Successfully")
    })
    .catch((err: Error) => {
      console.error(err);
    });

}
