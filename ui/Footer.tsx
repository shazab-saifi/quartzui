import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 w-full border-t border-neutral-200/60 py-8 text-sm text-neutral-600 sm:mt-20 sm:px-20 sm:py-12 lg:mt-24 lg:py-14 xl:px-50 dark:border-neutral-800/60 dark:text-neutral-400">
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div className="flex w-full flex-col justify-between md:flex-row">
          <div className="space-y-8 sm:space-y-16 lg:space-y-20">
            <div>
              <Link href="/" className="gap-sm flex items-center">
                <Image
                  src="quartzui-light.svg"
                  alt="logo"
                  width={22}
                  height={22}
                  className="hidden dark:inline"
                />
                <Image
                  src="quartzui-dark.svg"
                  alt="logo"
                  width={22}
                  height={22}
                  className="inline dark:hidden"
                />
                <h3 className="text-h5 hidden font-bold text-black sm:block dark:text-white">
                  Quartz UI
                </h3>
              </Link>
              <p className="text-para-big mt-3 max-w-96 leading-relaxed text-neutral-500 dark:text-neutral-200">
                A small collection of animated, accessible React components
                built with care.
              </p>
            </div>
            <div>
              <p className="text-para mt-4 text-neutral-500 dark:text-neutral-400">
                A project by{' '}
                <a
                  href="https://github.com/"
                  className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-800 dark:decoration-neutral-700 dark:hover:text-neutral-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shahzaib
                </a>
                . Building in public at{' '}
                <a
                  href="https://x.com/"
                  className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-800 dark:decoration-neutral-700 dark:hover:text-neutral-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  @quartzui
                </a>
                .
              </p>
              <p className="mt-4 text-[12px] text-neutral-500 sm:mt-6">
                © {year} QuartzUI
              </p>
            </div>
          </div>

          <div className="mt-xl md:mt-0">
            <nav
              aria-label="Footer"
              className="gap-xl md:gap-2xl grid grid-cols-2 sm:grid-cols-3"
            >
              <FooterColumn
                title="Explore"
                links={[
                  { label: 'Components', href: '/components' },
                  { label: 'Templates', href: '/templates' },
                  { label: 'Showcase', href: '/showcase' },
                  { label: 'Playground', href: '/play' },
                ]}
              />
              <FooterColumn
                title="Resources"
                links={[
                  { label: 'Docs', href: '/docs' },
                  { label: 'Guides', href: '/docs/guides' },
                  { label: 'Changelog', href: '/docs/changelog' },
                  { label: 'FAQ', href: '/docs/faq' },
                ]}
              />
              <FooterColumn
                title="Community"
                links={[
                  {
                    label: 'GitHub',
                    href: 'https://github.com/',
                    external: true,
                  },
                  {
                    label: 'Discord',
                    href: 'https://discord.com/',
                    external: true,
                  },
                  { label: 'Twitter', href: 'https://x.com/', external: true },
                  {
                    label: 'Sponsor',
                    href: 'https://github.com/sponsors',
                    external: true,
                  },
                ]}
              />
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-medium tracking-wider text-neutral-500 uppercase sm:mb-4 dark:text-neutral-400">
        {title}
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
