import { PageButton, PageContainer } from './styles';

interface PaginationProps {
  page: number;
  total: number;
  onPreviousPage: () => void;
  onSelectPage: (newPage: number) => void;
  onNextPage: () => void;
}

export const Pagination = ({
  page,
  total,
  onPreviousPage,
  onSelectPage,
  onNextPage
}: PaginationProps) => {
  const pageArr = Array.from({ length: total });

  return (
    <PageContainer>
      <PageButton onClick={onPreviousPage}>{`<`}</PageButton>
      {pageArr.map((_, index) => (
        <PageButton
          key={index}
          onClick={() => onSelectPage(index)}
          $selectedPage={index === page}
        >
          {index + 1}
        </PageButton>
      ))}
      <PageButton onClick={onNextPage}>{`>`}</PageButton>
    </PageContainer>
  );
};
