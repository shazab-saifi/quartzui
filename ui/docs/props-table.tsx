export interface PropRow {
  prop: string;
  type: string;
  default: string;
  description: string;
  required: 'Yes' | 'No';
}

interface PropsTableProps {
  rows: PropRow[];
}

export function PropsTable({ rows }: PropsTableProps) {
  const borderClass = 'border-neutral-200 dark:border-neutral-800';
  const cellPadding = 'px-4 py-3';
  const borderBase = `border-r border-b ${borderClass}`;

  return (
    <div className="max-w-[calc(100vw-2rem)] overflow-x-scroll">
      <table className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800">
        <thead>
          <tr>
            <th
              align="left"
              className={`${cellPadding} ${borderBase} bg-neutral-50 dark:bg-neutral-900`}
            >
              Prop
            </th>
            <th
              align="left"
              className={`${cellPadding} ${borderBase} bg-neutral-50 dark:bg-neutral-900`}
            >
              Type
            </th>
            <th
              align="left"
              className={`${cellPadding} ${borderBase} bg-neutral-50 dark:bg-neutral-900`}
            >
              Default
            </th>
            <th
              align="left"
              className={`${cellPadding} ${borderBase} bg-neutral-50 dark:bg-neutral-900`}
            >
              Description
            </th>
            <th
              align="left"
              className={`${cellPadding} border-b ${borderClass} bg-neutral-50 dark:bg-neutral-900`}
            >
              Required
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isLastRow = index === rows.length - 1;
            const lastRowBorder = isLastRow
              ? `border-r ${borderClass}`
              : borderBase;
            const lastCellBorder = isLastRow ? '' : `border-b ${borderClass}`;

            return (
              <tr key={index}>
                <td className={`${cellPadding} ${lastRowBorder}`}>
                  <code>{row.prop}</code>
                </td>
                <td className={`${cellPadding} ${lastRowBorder}`}>
                  <code>{row.type}</code>
                </td>
                <td className={`${cellPadding} ${lastRowBorder}`}>
                  <code>{row.default}</code>
                </td>
                <td
                  className={`${cellPadding} ${lastRowBorder} dark:text-neutral-300`}
                >
                  {row.description}
                </td>
                <td className={`${cellPadding} ${lastCellBorder}`}>
                  <code>{row.required}</code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
