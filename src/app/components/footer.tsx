import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-card p-7 text-slate-700 dark:text-slate-400">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-5 text-center text-sm">
        <p>© 2024 laet.dev</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Ismaellaet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:hidden"
              src="/github-mark.svg"
              width={24}
              height={24}
              alt=""
            />
            <Image
              className="hidden dark:block"
              src="/github-mark-white.svg"
              width={24}
              height={24}
              alt=""
            />
          </a>
          <a
            href="https://linkedin.com/in/ismaellaet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:hidden"
              src="/linkedin-mark.svg"
              width={25}
              height={25}
              alt=""
            />
            <Image
              className="hidden dark:block"
              src="/linkedin-mark-white.svg"
              width={24}
              height={24}
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
