import FloatingDock from '@/components/FloatingDock';
import PointerCard from '@/components/PointerCard';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconWorld,
} from '@tabler/icons-react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="mx-auto mt-16 max-w-3xl space-y-6 rounded-2xl border border-neutral-200 md:mt-30 md:space-y-8 md:rounded-4xl dark:border-neutral-800">
      <PointerCard>
        <div className="flex items-center gap-4 p-4 md:p-6">
          <Image
            src="stewie-music.webp"
            alt="owner-image"
            width={150}
            height={100}
            className="rounded-full"
          />
          <div>
            <p className="text-4xl font-bold">Shazab saifi</p>
            <p className="mt-2 text-2xl font-semibold">I&apos;m a developer</p>
          </div>
        </div>
        <div className="space-y-4 p-4 md:p-6">
          <p className="">
            Hi, I&apos;m Shazab, a passionate developer and designer who loves
            building beautiful, functional user interfaces. I enjoy working with
            modern web technologies and creating tools that help others move
            faster and build better products.
          </p>
          <p>
            This project, Quartz UI, is a modern component library designed to
            make it easy for developers and teams to create sleek, responsive,
            and production-ready interfaces. It&apos;s built for flexibility,
            speed, and customization, so you can focus on building great apps.
          </p>
        </div>
        <FloatingDock
          links={[
            {
              title: 'GitHub',
              icon: <IconBrandGithub className="h-full w-full" />,
              href: 'https://github.com/shazab-saifi',
            },
            {
              title: 'Portfolio',
              icon: <IconWorld className="h-full w-full" />,
              href: 'https://shazab-saifi.vercel.app/',
            },
            {
              title: 'Twitter',
              icon: <IconBrandX className="h-full w-full" />,
              href: 'https://twitter.com/shazabsaifi_s9',
            },
            {
              title: 'LinkedIn',
              icon: <IconBrandLinkedin className="h-full w-full" />,
              href: 'https://www.linkedin.com/in/shazab-saifi-85a207338',
            },
          ]}
          className="mt-20 mb-4"
          itemClassName="cursor-none"
        />
      </PointerCard>
    </div>
  );
};

export default page;
