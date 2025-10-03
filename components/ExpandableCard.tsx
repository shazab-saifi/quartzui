'use client';

import { IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'motion/react';

const ExpandableCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {!isOpen ? (
        <motion.div
          layoutId="parent-component"
          onClick={() => setIsOpen(true)}
          className="flex cursor-pointer flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-shadow hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <motion.div layoutId="image">
            <Image
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=Qklmb1JJend3cVIxSUxIeFBIRk96cUNGMHVRUVpqOEFiUFU4R0xNRVFxdkhJa2hkRmxkTlJIMk9SdFNSaWFNODE1UUxLT2t0cW42N3FvQzVqaGhrVVcvdmFyQU52eG9rbk9Lb1pmQWN1MGgrYWpGdS9XeFgvbS9ITnNYOEhYaG4"
              alt="iphone"
              width={250}
              height={250}
              className="h-fit py-6"
            />
          </motion.div>
          <motion.div layoutId="details" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-amber-700">Free Engraving</span>
              <h3 className="max-w-[230px] font-medium text-black">
                Airpods 4 With Active Noice Cancellation
              </h3>
            </div>
            <motion.span
              layoutId="pricing"
              className="text-sm text-neutral-500"
            >
              MRP ₹17900.00 (Incl. of all taxes)
            </motion.span>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          layoutId="parent-component"
          className="relative flex items-center gap-12 rounded-3xl bg-white p-8 text-black shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <motion.div layoutId="image">
            <Image
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Qklmb1JJend3cVIxSUxIeFBIRk96bThJMURFZUhTTm9tejgvK2t1SGM0aEQ4eDQxcUNOL3l1WDd2VTYzMXJYbkJkRlpCNVhYU3AwTldRQldlSnpRa01rSksyTE9QS1lFVXpHNmJsRVlaOWM"
              alt="iphone"
              width={450}
              height={450}
              className="h-fit py-6"
            />
          </motion.div>
          <motion.div layoutId="details" className="flex flex-col gap-12">
            <div>
              <span className="font-semibold text-amber-700">
                Free Engraving
              </span>
              <h2 className="text-[40px] leading-12 font-semibold">
                Buy Airpods 4
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <span>Choose Your Model</span>
              <div className="flex items-center justify-between rounded-xl border-1 p-4">
                <span className="font-medium">AirPods 4</span>
                <div className="flex max-w-44 flex-col items-end gap-1">
                  <span className="text-right text-xs leading-4 text-neutral-700">
                    From ₹1983.00/mo. with instant cashback§§ and No Cost EMI§
                  </span>
                  <span className="text-xs text-neutral-700">₹12900.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border-2 border-blue-700 p-4">
                <span className="max-w-44 font-medium">
                  AirPods 4 With Noise Cancellation
                </span>
                <div className="flex max-w-44 flex-col items-end gap-1">
                  <span className="text-right text-xs text-neutral-700">
                    From ₹2817.00/mo. with instant cashback§§ and No Cost EMI§
                  </span>
                  <span className="text-xs text-neutral-700">₹17900.00</span>
                </div>
              </div>

              <div className="mt-2 flex flex-col rounded-xl bg-neutral-100 p-4">
                <span className="text-sm font-semibold text-neutral-800">
                  Which AirPods 4 are right for you?
                </span>
                <span className="text-sm text-neutral-700">
                  Compare the differences in audio features and charging
                  <br /> case.
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 cursor-pointer rounded-full bg-neutral-100 p-2 text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <IconX />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ExpandableCard;
