import {
  IconRosetteDiscountCheckFilled,
  // IconStarFilled,
} from '@tabler/icons-react';
import Image from 'next/image';
import { Heading } from './heading';

interface Testimonial {
  username: string;
  name: string;
  review: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    username: '@devraj',
    name: 'Raj Mehta',
    review:
      '“Saved me weeks of work. Components are clean, responsive, and easy to customize. My productivity doubled, and my apps look more professional.”',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
  },
  {
    username: '@sarah.codes',
    name: 'Sarah Johnson',
    review:
      '“A beautiful and flexible UI library. Everything is intuitive, docs are top-notch, and I barely wrote extra code.”',
    avatar:
      'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg',
  },
  {
    username: '@frontendNinja',
    name: 'Akash Sharma',
    review:
      '“Tried countless libraries, but this one stands out. Modern design, smooth performance, easy to integrate.”',
    avatar:
      'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg',
  },
  {
    username: '@ui_queen',
    name: 'Emily Carter',
    review:
      '“As a designer who codes, this library feels magical. Attention to detail makes building interfaces fast and enjoyable.”',
    avatar:
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
  },
  {
    username: '@mohit_dev',
    name: 'Mohit Kumar',
    review:
      '“Clean code, reusable patterns, and it just works out of the box. My go-to for every project.”',
    avatar:
      'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg',
  },
];

const testimonialsSet2: Testimonial[] = [
  {
    username: '@alexBuilds',
    name: 'Alex Martinez',
    review:
      '“Bridges speed and creativity. Launched my MVP fast, without compromising design or performance.”',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
  },
  {
    username: '@frontendLover',
    name: 'Priya Chauhan',
    review:
      '“Support is great and the library fits perfectly with my stack. Updating UI is a breeze now!”',
    avatar:
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
  },
  {
    username: '@fullstack_guru',
    name: 'John Doe',
    review:
      '“Replaced all my old UI kits for this one. Slick styling and hassle-free theming.”',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
  },
  {
    username: '@vuesome',
    name: 'Linda Fox',
    review:
      '“Perfect for prototypes and shipping to production. Really love the accessibility-first approach.”',
    avatar:
      'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
  },
  {
    username: '@css_pro',
    name: 'Jin Lee',
    review:
      '“Customizing was so easy compared to other libraries. Saved a ton of time!”',
    avatar: 'https://images.pexels.com/photos/91239/pexels-photo-91239.jpeg',
  },
];

const testimonialsSet3: Testimonial[] = [
  {
    username: '@designerjoe',
    name: 'Joe Hughes',
    review:
      '“As a product designer, I appreciate the attention to UX details here. Phenomenal work.”',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    username: '@codebycarl',
    name: 'Carl White',
    review:
      '“Setup was painless, and the built-in variants let me move so much faster.”',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  {
    username: '@phoebe_ui',
    name: 'Phoebe Tran',
    review:
      '“Loved the documentation and the developer experience. Will recommend to my team!”',
    avatar:
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
  },
  {
    username: '@deploydan',
    name: 'Daniel Becker',
    review:
      '“Shipping features has never been easier. I’m using this for all new apps!”',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    username: '@sarah.codes',
    name: 'Sarah Johnson',
    review:
      '“A beautiful and flexible UI library. Everything is intuitive, docs are top-notch, and I barely wrote extra code.”',
    avatar:
      'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg',
  },
  {
    username: '@frontendNinja',
    name: 'Akash Sharma',
    review:
      '“Tried countless libraries, but this one stands out. Modern design, smooth performance, easy to integrate.”',
    avatar:
      'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg',
  },
];

const Testimonials = () => {
  return (
    <div className="mt-36 flex flex-col items-center gap-12 px-4 sm:px-8 md:mt-64 md:gap-16 lg:px-20 2xl:px-60">
      <div>
        <Heading as="h2" className="text-center">
          Loved by developers & designers
        </Heading>
        <p className="mx-auto mt-2 max-w-md text-center text-neutral-600 sm:mt-4 md:text-lg dark:text-neutral-400">
          Real stories from teams who trust our UI kit for speed, quality, and
          effortless integration.
        </p>
      </div>
      <div className="grid max-h-216 grid-cols-1 gap-6 overflow-hidden mask-y-from-80% sm:grid-cols-2 md:grid-cols-3 xl:gap-12">
        <div className="flex flex-col gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex -translate-y-4 flex-col gap-6">
          {testimonialsSet3.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {testimonialsSet2.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-950">
      <div>
        {/* <div className="mb-3 flex gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <IconStarFilled
              key={idx}
              fill="var(--color-yellow-500)"
              size={16}
            />
          ))}
        </div> */}
        <p>{testimonial.review}</p>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          width={48}
          height={48}
          alt={`avatar-${testimonial.name}`}
          className="size-11 rounded-full"
        />
        <div>
          <div className="flex items-center gap-1">
            <p className="text-sm">{testimonial.name}</p>
            <IconRosetteDiscountCheckFilled
              fill="var(--color-sky-500)"
              size={14}
            />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {testimonial.username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
