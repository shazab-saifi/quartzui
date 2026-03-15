import { cn } from '@/lib/utils';

const MotionSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      width="128"
      height="49"
      viewBox="0 0 128 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('absolute -right-2 bottom-4', className)}
    >
      <path
        d="M109.35 1L88.8662 37.7773C87.3228 40.5479 84.5852 43.1145 81.3672 44.9912C78.1497 46.8675 74.5451 47.9999 71.3291 48H60.5986L86.7754 1H109.35ZM79.9805 1L53.8037 48H31.2285L57.4053 1H79.9805ZM39.7236 1H50.459L24.2773 48H1.70215L22.1855 11.2227C23.7289 8.45212 26.4665 5.88546 29.6846 4.00879C32.7013 2.24956 36.0583 1.14387 39.1162 1.0127L39.7236 1ZM125.567 1C131.895 1 137 6.0488 137 12.25C137 18.4512 131.895 23.5 125.567 23.5C119.24 23.4998 114.136 18.4511 114.136 12.25C114.136 6.04894 119.24 1.00023 125.567 1Z"
        className="stroke-neutral-200 transition-colors duration-200 group-hover:stroke-[#FEF62A] dark:stroke-neutral-800"
        strokeWidth="3"
      />
    </svg>
  );
};

export default MotionSVG;
