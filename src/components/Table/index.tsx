import { Fragment, useEffect, useState } from 'react';
import { Pagination } from './Pagination';
import { TableContainer, TableContent, TableHeaderCell } from './styles';
import { TableProps } from './types';

export const Table = ({ columns, data }: TableProps) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [data]);

  const handlePreviousPage = () => data[page - 1] && setPage(page - 1);
  const handleNextPage = () => data[page + 1] && setPage(page + 1);
  const handleChangePage = (value: number) => setPage(value);

  return (
    <TableContainer>
      <TableContent>
        <thead>
          <tr>
            {columns.map(({ key, title }) => (
              <TableHeaderCell key={key}>{title}</TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {data[page].map((item, index) => (
            <tr key={index}>
              {columns.map(({ key, render }, index) =>
                render ? (
                  <Fragment key={index}>{render(item)}</Fragment>
                ) : (
                  <td key={key}>item[key]</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </TableContent>

      <Pagination
        page={page}
        total={data.length}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        onSelectPage={handleChangePage}
      />
    </TableContainer>
  );
};
