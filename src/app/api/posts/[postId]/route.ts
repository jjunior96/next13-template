import { NextResponse } from 'next/server';

import { allPosts } from 'contentlayer/generated';

import { formatPost } from '@/functions';

export function GET(
  request: Request,
  {
    params
  }: {
    params: { postId: string };
  }
) {
  const id = params.postId;

  const posts = formatPost(allPosts);
  const post = posts.find((item) => item.id === id);

  return NextResponse.json({
    data: post ?? null
  });
}
