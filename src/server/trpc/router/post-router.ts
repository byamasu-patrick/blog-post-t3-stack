import { createPostModel } from "../../../models/post-model";

import { router, publicProcedure } from "../trpc";

export const postRouter = router({
  createPost: publicProcedure
    .input(createPostModel)
    .query(({ input }) => {
      return {
        headline: `${input?.headline} !`,
        description: input?.description
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
