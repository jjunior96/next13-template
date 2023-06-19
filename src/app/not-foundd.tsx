'use client';

import { Foldit } from 'next/font/google';
import { useRouter } from 'next/navigation';

import { CallToAction } from '@/components/CallToAction';
import { Empty } from '@/components/Empty';
import { ArrowLeftIcon } from '@/components/Icons';

export const metadata = {
  title: 'Página 404',
  description: 'Página não encontrada'
};

const font = Foldit({
  subsets: ['latin'],
  style: 'normal',
  weight: '600',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export default function NotFound() {
  const router = useRouter();

  return (
    <Empty>
      <div className="flex flex-col items-center">
        <h1
          className={`${font.className} text-8xl font-bold tracking-[0.8rem]`}
        >
          404
        </h1>
        <p className="mt-2 text-center text-lg text-gray-400">
          Página não encontrada
        </p>

        <button
          type="button"
          onClick={() => {
            router.push('/');
            router.refresh();
          }}
        >
          Home
        </button>

        <div className="mt-8">
          <CallToAction
            href="/"
            leftAdornment={
              <ArrowLeftIcon
                className="transition-all duration-300 group-hover:-translate-x-2"
                size={20}
              />
            }
          >
            Voltar para o início
          </CallToAction>
        </div>
      </div>
    </Empty>
  );
}
