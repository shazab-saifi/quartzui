import { Children, cloneElement, isValidElement, ReactNode } from 'react';

export function Steps({ children }: { children: ReactNode }) {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <ol className="not-prose-ol relative list-none pl-4">
      {items.map((child, idx) =>
        isValidElement(child)
          ? // inject isLast into each Step
            // @ts-expect-error React.cloneElement keeps props typing simple here
            cloneElement(child, { isLast: idx === items.length - 1 })
          : child
      )}
    </ol>
  );
}
