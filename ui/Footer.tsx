import { componentsData } from '@/lib/components-data';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  const components = componentsData
    .filter((component) => !component.isDoc)
    .map((component) => ({
      label: component.title,
      href: component.link as string,
    }));

  return (
    <footer className="w-full border-t border-neutral-200/60 bg-white px-4 pt-8 pb-4 text-sm text-neutral-600 sm:px-8 sm:pt-12 lg:px-20 lg:pt-14 2xl:px-60 dark:border-neutral-800/60 dark:bg-neutral-950 dark:text-neutral-400">
      <div className="flex w-full flex-col justify-between lg:flex-row lg:gap-16">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296296/quartzui-light_ytrk9a.svg"
              alt="logo"
              width={22}
              height={22}
              className="hidden dark:inline"
            />
            <Image
              src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296311/quartzui-dark_ixfmns.svg"
              alt="logo"
              width={22}
              height={22}
              className="inline dark:hidden"
            />
            <h3 className="hidden text-lg font-bold text-black sm:block dark:text-white">
              Quartz UI
            </h3>
          </Link>
          <p className="mt-3 max-w-96 text-base leading-relaxed font-medium text-neutral-800 dark:text-neutral-200">
            A small collection of animated, accessible React components built
            with care.
          </p>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            A project by{' '}
            <a
              href="https://github.com/shazab-saifi"
              className="font-semibold text-indigo-500 underline decoration-indigo-500 underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              Shazab
            </a>
            . Building in public at{' '}
            <a
              href="https://x.com/shazabsaifi_s9"
              className="font-semibold text-indigo-500 underline decoration-indigo-500 underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              @quartzui
            </a>
            .
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="mt-14 grid grid-cols-2 gap-12 sm:grid-cols-4 md:gap-16 lg:mt-0"
        >
          <FooterColumn
            title="Explore"
            links={[
              { label: 'Components', href: '/components' },
              { label: 'Templates', href: '/templates' },
              { label: 'Showcase', href: '/showcase' },
              { label: 'Playground', href: '/play' },
              { label: 'Roadmap', href: '/roadmap' },
              { label: 'Blog', href: '/blog' },
            ]}
          />
          <FooterColumn title="Components" links={components} />
          <FooterColumn
            title="Resources"
            links={[
              { label: 'Docs', href: '/docs' },
              { label: 'Guides', href: '/docs/guides' },
              { label: 'Changelog', href: '/docs/changelog' },
              { label: 'FAQ', href: '/docs/faq' },
              { label: 'API Reference', href: '/docs/api' },
              { label: 'Tutorials', href: '/docs/tutorials' },
              { label: 'Cheat Sheet', href: '#' },
              { label: 'Patterns', href: '#' },
              { label: 'Examples', href: '#' },
              { label: 'Roadmap', href: '#' },
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
              {
                label: 'Reddit',
                href: 'https://reddit.com/',
                external: true,
              },
              {
                label: 'Forum',
                href: 'https://forum.quartzui.dev',
                external: true,
              },
              { label: 'Email', href: '#' },
            ]}
          />
        </nav>
      </div>
      <p className="mt-4 text-center text-xs text-neutral-500 sm:mt-6 md:mt-16 lg:mt-24 dark:text-neutral-400">
        © {year} QuartzUI
      </p>
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
      <h3 className="mb-3 text-xs font-medium tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
        {title}
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {links.map((link, idx) =>
          link.label ? (
            <li key={link.label + idx}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}
