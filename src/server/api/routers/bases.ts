import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import {z} from "zod"
import { db } from "@/server/db";
export const basesRouter = createTRPCRouter({
  getBasesByUserId: publicProcedure
    .input(z.object({ownerId: z.string()}))
    .query(({input}) => {
      return db.base.findMany({
        where: { ownerId: input.ownerId },
      });
    }),
  createNewBaseWithUserId: publicProcedure
    .input(z.object({ownerId: z.string()}))
    .mutation(async ({input}) => {
      await db.base.create({
        data: {
          ownerId: input.ownerId,
          name: "Untitled Base",
          data: {}
        }
      })
    })
})