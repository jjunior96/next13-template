import { NextResponse } from 'next/server';

import { allPosts } from 'contentlayer/generated';

import { capitalizeWord } from '@/functions';

export function GET() {
  const allTags = allPosts.map((post) => post.tags?.map((tag) => tag)).flat();

  const capitalizedTags = allTags.map((tag) => capitalizeWord(tag));
  const formattedTags = new Set(capitalizedTags);

  return NextResponse.json({
    data: Array.from(formattedTags)
  });
}
