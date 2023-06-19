import { siteConfig } from '@/config';

const title = 'Home | Junior Alves';
const description = 'Blog onde falo sobre livros e código';

export const metadata = {
  title,
  description,
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}`,
    title,
    description,
    siteName: 'Dev Junior Alves',
    images: [
      {
        url: `/cover.jpg`
      }
    ]
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteConfig.url}/cover.jpg`]
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="flex w-full justify-center pb-8"></div>
    </>
  );
}
