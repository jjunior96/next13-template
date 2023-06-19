import { siteConfig } from '@/config/site';
import { markdownToHtml } from '@/functions';

import { BlogPostType } from '@/models';

export async function generateRssItem(post: BlogPostType) {
  const content = await markdownToHtml(post.body.code || '');

  return `
    <item>
      <guid>${siteConfig.url}/${post.slug}</guid>
      <title>${post.frontmatter.title}</title>
      <description>${post.frontmatter.description}</description>
      <link>${siteConfig.url}/${post.slug}</link>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      <content:encoded><![CDATA[${content}]]></content:encoded>
    </item>
  `;
}

export async function generateRss(posts: BlogPostType[]) {
  const itemsList = await Promise.all(posts.map(generateRssItem));

  return `
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
      <channel>
        <title>${siteConfig.name}</title>
        <link>${siteConfig.url}</link>
        <description>${siteConfig.description}</description>
        <language>en</language>
        <lastBuildDate>${new Date(
          posts[0].frontmatter.date
        ).toUTCString()}</lastBuildDate>
        <atom:link href="${
          siteConfig.url
        }" rel="self" type="application/rss+xml"/>
        ${itemsList.join('')}
      </channel>
    </rss>
  `;
}
