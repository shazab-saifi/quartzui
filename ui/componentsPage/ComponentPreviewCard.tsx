import { IconExternalLink } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const ComponentPreviewCard = ({
  src,
  heading,
  desc,
  link,
}: {
  src: string;
  heading: string;
  desc: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 md:h-72 lg:h-76 dark:border-neutral-800"
    >
      <Image
        src={src}
        className="absolute z-0 h-full w-full object-cover transition-transform group-hover:scale-112"
        width={448}
        height={248}
        alt="preview-image"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 z-20 w-full p-6 text-neutral-50 dark:text-white">
        <div className="flex items-center gap-2 text-lg font-semibold group-hover:underline">
          <span>{heading}</span>
          <IconExternalLink
            size={18}
            className="invisible group-hover:visible"
          />
        </div>
        <p className="mt-2 text-sm text-neutral-200 dark:text-neutral-400">
          {desc}
        </p>
      </div>
    </Link>
  );
};

export default ComponentPreviewCard;
