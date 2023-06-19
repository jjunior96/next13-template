import { NextRequest, NextResponse } from 'next/server';

import { allPosts } from 'contentlayer/generated';

import {
  formatPost,
  formatSimplifiedPosts,
  paginationPosts
} from '@/functions';

const POSTS_PER_PAGE = 10;

// limit = 20 => perPage
// offset = 0 => pagination
// url = ?limit=${limit}&offset=${offset}

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit') || '10');
  const offset = Number(searchParams.get('offset') || '0');
  const simplified = searchParams.get('simplified') !== 'false';

  const posts = simplified
    ? formatSimplifiedPosts(allPosts)
    : formatPost(allPosts);

  const numbPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPage = offset + 1;

  const totalPosts = paginationPosts(posts, limit, currentPage);

  return NextResponse.json({
    data: {
      posts: totalPosts,
      numbPages,
      currentPage
    }
  });
}
