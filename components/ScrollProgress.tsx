'use client';

import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useSpring,
} from 'motion/react';
import Image from 'next/image';

const images = [
  {
    src: 'https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'image-1',
  },
  {
    src: 'https://images.pexels.com/photos/1548111/pexels-photo-1548111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'image-2',
  },
];

const paragraphs = [
  [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
    dolores quo quas, corporis quibusdam saepe ratione molestiae
    aperiam! Excepturi totam tenetur temporibus autem et dolorum quia
    maxime similique nesciunt quibusdam. Corrupti ipsum praesentium
    aliquid voluptatem delectus officiis, error illum nobis aut officia
    sint possimus quidem assumenda totam, labore ex laboriosam dolor
    eveniet voluptatibus tempore voluptatum necessitatibus obcaecati
    alias aperiam? Deleniti! Mollitia, maxime quod eligendi suscipit aut
    dignissimos repellat! Iure, maiores necessitatibus, corporis ipsum
    nihil, voluptatem sequi distinctio tempore impedit natus dicta.
    Fugiat molestias vero dolorem modi sed consequatur recusandae
    tempora. Accusamus deserunt dicta voluptatibus saepe fuga numquam
    consequatur omnis delectus accusantium corrupti quis, culpa
    veritatis neque blanditiis libero consequuntur enim necessitatibus
    possimus! Iure numquam beatae amet eum explicabo tempora doloremque?
    Nam nulla atque deleniti. Neque ad eaque, totam velit ullam in
    provident quo qui numquam animi quas fugit a illum sunt doloribus
    possimus repellendus. Consectetur nulla dolorum id nam amet! Quis
    ducimus quia sunt aliquam quasi odio cupiditate dolore. Libero illo,
    deleniti laudantium dolorem adipisci enim sunt nobis maiores numquam
    reiciendis non. Eum adipisci, minima commodi facere iure ipsum
    laborum. Vitae voluptates voluptate ipsa aliquam facere qui soluta
    ducimus officiis quibusdam aliquid, enim nostrum minima aperiam.
    Facilis recusandae quasi animi, repellat harum doloremque rerum
    voluptates illum impedit. Assumenda, cumque animi. Voluptatum
    blanditiis inventore itaque nisi veniam sint facere labore quae
    porro quaerat soluta voluptate mollitia voluptatem voluptates, sed
    non. Consequuntur architecto iste debitis nesciunt saepe quaerat. Ut
    magnam doloribus alias. Mollitia sed omnis veritatis consectetur
    vero! Repudiandae corrupti saepe iure veritatis perferendis sequi
    vel veniam itaque obcaecati sed! Expedita culpa perferendis dolores,
    impedit deleniti modi nisi ipsum reprehenderit eum nemo! Similique
    aliquam illo voluptate, minus corporis accusamus culpa sequi totam
    beatae ea nam quasi vero dolorum, repudiandae placeat odio quidem id
    quibusdam tempora quos dolore facilis cupiditate! Beatae,
    repellendus perspiciatis!`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad
    molestias recusandae nisi minima iste culpa molestiae quo! Voluptate
    quas quos consectetur velit, voluptatibus sint consequatur quis
    natus sapiente fugiat. Dolorem, necessitatibus nesciunt delectus
    ullam minima perspiciatis totam! Officiis illum, harum reiciendis
    aspernatur corrupti odit distinctio vero quisquam, quod consectetur
    vitae nisi facere nobis neque eveniet unde molestiae magnam ullam!
    Sint recusandae repudiandae doloremque aperiam obcaecati nobis
    cupiditate libero illum, aliquam rem, accusantium temporibus autem
    cum inventore adipisci assumenda possimus, consectetur dicta eaque
    quod quidem ex nulla sed! Eius, adipisci! Non ratione delectus
    assumenda ipsum nostrum nulla placeat est sapiente ut? Sapiente quia
    quo rem officia, in non officiis, iusto quidem voluptatem explicabo
    totam eius fuga a animi corrupti quam! Aliquid at soluta perferendis
    velit fugiat odit, aliquam dolores sint quisquam cupiditate ipsam.
    Quos quo eos quidem molestias incidunt quis, adipisci, perferendis a
    possimus earum reprehenderit sit nulla quia labore. Nesciunt
    exercitationem modi consectetur amet, iure dolores? Ullam dolore,
    amet aperiam praesentium numquam in beatae nam ex? Ducimus non
    excepturi facilis modi ab quasi minus natus sed obcaecati illum!
    Hic? Deserunt, sit. Obcaecati maiores ratione quos tempora
    perferendis corporis, quia odit omnis voluptatum optio pariatur
    veritatis minus harum beatae repellat qui ut inventore tempore, unde
    ipsam nemo cum. Saepe, hic.`,
  ],
  [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
    dolores quo quas, corporis quibusdam saepe ratione molestiae
    aperiam! Excepturi totam tenetur temporibus autem et dolorum quia
    maxime similique nesciunt quibusdam. Corrupti ipsum praesentium
    aliquid voluptatem delectus officiis, error illum nobis aut officia
    sint possimus quidem assumenda totam, labore ex laboriosam dolor
    eveniet voluptatibus tempore voluptatum necessitatibus obcaecati
    alias aperiam? Deleniti! Mollitia, maxime quod eligendi suscipit aut
    dignissimos repellat! Iure, maiores necessitatibus, corporis ipsum
    nihil, voluptatem sequi distinctio tempore impedit natus dicta.
    Fugiat molestias vero dolorem modi sed consequatur recusandae
    tempora. Accusamus deserunt dicta voluptatibus saepe fuga numquam
    consequatur omnis delectus accusantium corrupti quis, culpa
    veritatis neque blanditiis libero consequuntur enim necessitatibus
    possimus! Iure numquam beatae amet eum explicabo tempora doloremque?
    Nam nulla atque deleniti. Neque ad eaque, totam velit ullam in
    provident quo qui numquam animi quas fugit a illum sunt doloribus
    possimus repellendus. Consectetur nulla dolorum id nam amet! Quis
    ducimus quia sunt aliquam quasi odio cupiditate dolore. Libero illo,
    deleniti laudantium dolorem adipisci enim sunt nobis maiores numquam
    reiciendis non. Eum adipisci, minima commodi facere iure ipsum
    laborum. Vitae voluptates voluptate ipsa aliquam facere qui soluta
    ducimus officiis quibusdam aliquid, enim nostrum minima aperiam.
    Facilis recusandae quasi animi, repellat harum doloremque rerum
    voluptates illum impedit. Assumenda, cumque animi. Voluptatum
    blanditiis inventore itaque nisi veniam sint facere labore quae
    porro quaerat soluta voluptate mollitia voluptatem voluptates, sed
    non. Consequuntur architecto iste debitis nesciunt saepe quaerat. Ut
    magnam doloribus alias. Mollitia sed omnis veritatis consectetur
    vero! Repudiandae corrupti saepe iure veritatis perferendis sequi
    vel veniam itaque obcaecati sed! Expedita culpa perferendis dolores,
    impedit deleniti modi nisi ipsum reprehenderit eum nemo! Similique
    aliquam illo voluptate, minus corporis accusamus culpa sequi totam
    beatae ea nam quasi vero dolorum, repudiandae placeat odio quidem id
    quibusdam tempora quos dolore facilis cupiditate! Beatae,
    repellendus perspiciatis!`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad
    molestias recusandae nisi minima iste culpa molestiae quo! Voluptate
    quas quos consectetur velit, voluptatibus sint consequatur quis
    natus sapiente fugiat. Dolorem, necessitatibus nesciunt delectus
    ullam minima perspiciatis totam! Officiis illum, harum reiciendis
    aspernatur corrupti odit distinctio vero quisquam, quod consectetur
    vitae nisi facere nobis neque eveniet unde molestiae magnam ullam!
    Sint recusandae repudiandae doloremque aperiam obcaecati nobis
    cupiditate libero illum, aliquam rem, accusantium temporibus autem
    cum inventore adipisci assumenda possimus, consectetur dicta eaque
    quod quidem ex nulla sed! Eius, adipisci! Non ratione delectus
    assumenda ipsum nostrum nulla placeat est sapiente ut? Sapiente quia
    quo rem officia, in non officiis, iusto quidem voluptatem explicabo
    totam eius fuga a animi corrupti quam! Aliquid at soluta perferendis
    velit fugiat odit, aliquam dolores sint quisquam cupiditate ipsam.
    Quos quo eos quidem molestias incidunt quis, adipisci, perferendis a
    possimus earum reprehenderit sit nulla quia labore. Nesciunt
    exercitationem modi consectetur amet, iure dolores? Ullam dolore,
    amet aperiam praesentium numquam in beatae nam ex? Ducimus non
    excepturi facilis modi ab quasi minus natus sed obcaecati illum!
    Hic? Deserunt, sit. Obcaecati maiores ratione quos tempora
    perferendis corporis, quia odit omnis voluptatum optio pariatur
    veritatis minus harum beatae repellat qui ut inventore tempore, unde
    ipsam nemo cum. Saepe, hic.`,
  ],
];

const ProgressBar = ({ height }: { height: MotionValue<string> }) => (
  <div className="absolute top-0 left-8 z-50 h-full w-2">
    <motion.div
      style={{
        height,
        background: 'linear-gradient(to bottom, purple, blue, #00cfff)',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: -160,
        transformOrigin: 'top',
        borderRadius: '9999px',
        boxShadow:
          '0 0 8px 2px rgba(128,0,255,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
      }}
      className="dark:shadow-[0_0_12px_4px_rgba(0,255,255,0.25)]"
    />
  </div>
);

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const progressBarHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  const smoothHeight = useSpring(progressBarHeight, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <div className="relative my-10 flex max-w-7xl bg-white text-black transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
      <ProgressBar height={smoothHeight} />
      <div className="flex max-w-4xl flex-col gap-20">
        <div className="space-y-10">
          <h1 className="text-4xl font-semibold">
            Lorem ipsum dolor sit amet.
          </h1>
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={960}
            height={600}
            className="aspect-video rounded-lg shadow-md dark:shadow-lg"
          />
        </div>
        <div className="space-y-6 text-xl leading-8">
          {paragraphs[0].map((text, idx) => (
            <p key={idx} className="dark:text-gray-200">
              {text}
            </p>
          ))}
        </div>
        <Image
          src={images[1].src}
          alt={images[1].alt}
          width={960}
          height={600}
          className="rounded-lg shadow-md dark:shadow-lg"
        />
        <div className="space-y-6 text-xl leading-8">
          {paragraphs[1].map((text, idx) => (
            <p key={idx} className="dark:text-gray-200">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;
