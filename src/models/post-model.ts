import z from 'zod'

export const createPostModel = z.object({
  headline: z.string().max(256, 'Max title length is 256'),
  description: z.string().min(10),
})

export type CreatePostInput = z.TypeOf<typeof createPostModel>

export const getSinglePostModel = z.object({
  postId: z.string().uuid(),
})
