import { IconQuoteFilled } from '@tabler/icons-react';
import Image from 'next/image';

interface Testimonial {
  username: string;
  name: string;
  review: string;
  avatar: string;
  highlight?: boolean;
}

const testimonials: Testimonial[] = [
  {
    username: '@devraj',
    name: 'Raj Mehta',
    review:
      '“This UI library saved me weeks of work. The components are clean, responsive, and incredibly easy to customize. My productivity has doubled, and my apps now look more professional.”',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
    highlight: true,
  },
  {
    username: '@sarah.codes',
    name: 'Sarah Johnson',
    review:
      '“Finally, a UI library that balances beauty and flexibility. Everything feels intuitive, the documentation is top-notch, and I barely had to write extra code.”',
    avatar:
      'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg',
  },
  {
    username: '@frontendNinja',
    name: 'Akash Sharma',
    review:
      '“I’ve tried countless libraries, but this one really stands out. The design is modern, performance is smooth, and integration into my existing project was effortless.”',
    avatar:
      'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg',
  },
  {
    username: '@ui_queen',
    name: 'Emily Carter',
    review:
      '“As a designer who codes, this library feels like pure magic. The attention to detail in every component makes building interfaces faster and a lot more enjoyable.”',
    avatar:
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
  },
  {
    username: '@mohit_dev',
    name: 'Mohit Kumar',
    review:
      '“Clean code, reusable patterns, and everything just works out of the box. It’s become my go-to library for every new project, big or small.”',
    avatar:
      'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg',
  },
  {
    username: '@alexBuilds',
    name: 'Alex Martinez',
    review:
      '“This UI library bridges the gap between speed and creativity. I was able to launch my MVP in record time without compromising on performance or design quality.”',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
  },
];

const Testimonials = () => {
  return (
    <div>
      <h3 className="md:text-h4 text-h5 text-center leading-7 font-semibold text-neutral-950 dark:text-neutral-100">
        Our Trusted Users
      </h3>
      <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`flex h-full flex-col justify-between gap-8 rounded-2xl border border-neutral-200 [background-image:linear-gradient(125deg,theme(colors.neutral.50),theme(colors.neutral.100))] p-6 dark:border-neutral-800 dark:[background-image:linear-gradient(125deg,theme(colors.neutral.900),theme(colors.neutral.950),theme(colors.neutral.950))] ${
              testimonial.highlight &&
              'border-none [background-image:linear-gradient(125deg,theme(colors.sky.400),theme(colors.sky.500),theme(colors.sky.600))] text-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:-translate-x-2 lg:-translate-y-2 lg:scale-[1.03] dark:[background-image:linear-gradient(125deg,theme(colors.sky.400),theme(colors.sky.500),theme(colors.sky.600))] dark:shadow-none'
            }`}
          >
            <div className="space-y-10">
              <IconQuoteFilled className="rotate-180 dark:text-neutral-100" />
              <p
                className={`text-sm text-neutral-950 dark:text-neutral-300 ${testimonial.highlight && 'font-bold text-white dark:text-white'}`}
              >
                {testimonial.review}
              </p>
            </div>

            <div className="flex w-full items-center justify-between">
              <div>
                <div
                  className={`font-semibold text-neutral-950 dark:text-neutral-100 ${testimonial.highlight && 'text-white'}`}
                >
                  {testimonial.name}
                </div>
                <div
                  className={`text-sm text-neutral-600 dark:text-neutral-400 ${testimonial.highlight && 'text-white dark:text-white'}`}
                >
                  {testimonial.username}
                </div>
              </div>
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover"
                width={48}
                height={48}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
