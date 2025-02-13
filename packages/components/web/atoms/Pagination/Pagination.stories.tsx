import { usePagination } from '@monorepo-template/shared/PaginationContext';
import { Pagination } from '.';
import { Button } from '../Button';
import styled from 'styled-components';

export default {
  title: 'atoms/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const mockLength = 100;
const mockData = Array.from({ length: mockLength }, (_, i) => i);

function useMockData({ page, itemsPerPage }: { page: number; itemsPerPage: number }) {
  /* Normally this might be something like:
    return useQuery({
      queryKey: ['paginatedData', {page, itemsPerPage}],
      queryFn: async () => {
        const response = await fetch('https://api.example.com/data');
        return await response.json();
    });
   */
  const startingIndex = page * itemsPerPage;
  return {
    data: mockData.slice(startingIndex, startingIndex + itemsPerPage),
  };
}

const PageButton = styled(Button)<React.ComponentProps<typeof Button> & { $active?: boolean }>`
  ${({ $active }) => {
    return $active && `font-weight: bold;`;
  }}
`;

// I don't generally like writing a styled-component for every div which has minor layout styling. Instead
// I would prefer a Box component which allows for layout props to be passed to it, allowing for easy layout management
const MockDataGrid = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto auto;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  column-gap: 4rem;
  row-gap: 1rem;
`;

const PaginationFooter = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

function PaginationChildren() {
  const { page, itemsPerPage, pageNumbers, setPage } = usePagination();
  const { data } = useMockData({ page, itemsPerPage });
  return (
    <>
      <MockDataGrid>
        {data.map((val) => (
          <div key={val}>Item {val + 1}</div>
        ))}
      </MockDataGrid>
      <PaginationFooter>
        <Pagination.PreviousButton />
        {pageNumbers.map(({ page: pageNumber, key }) => (
          <PageButton $active={page === pageNumber} key={key} onClick={() => setPage(pageNumber)}>
            {pageNumber + 1}
          </PageButton>
        ))}
        <Pagination.NextButton />
      </PaginationFooter>
    </>
  );
}

function PaginationWithChildren() {
  return (
    <Pagination totalItems={mockData.length} itemsPerPage={10}>
      <PaginationChildren />
    </Pagination>
  );
}

export const Default = {
  render: () => <PaginationWithChildren />,
  args: {},
};
