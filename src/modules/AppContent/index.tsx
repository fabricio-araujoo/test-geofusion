import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Cell,
  Container,
  Header,
  Map,
  NumberInput,
  Table,
  TextInput
} from '../../components';
import { changeBalance, changeSearch } from '../../reducer';
import { RootState } from '../../store';
import { filterData } from './helpers';
import { DataContainer, FilterContainer } from './styles';
import { DataType } from './types';

export const AppContent = () => {
  const {
    data: { data, filter }
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const { filteredData, markers } = filterData(data, filter.search);

  const onChangeSearch = ({ target }: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeSearch(target.value));

  const onChangeBalance = ({ target }: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeBalance(target.value));

  const columns = [
    {
      key: 'name',
      title: 'Loja',
      render: (item: DataType) => (
        <Cell $highlight={item.revenue <= filter.balance}>{item.name}</Cell>
      )
    },
    {
      key: 'revenue',
      title: 'Faturamento',
      render: (item: DataType) => (
        <Cell $highlight={item.revenue <= filter.balance}>{item.revenue}</Cell>
      )
    }
  ];

  return (
    <>
      <Header />

      <Container>
        <FilterContainer>
          <TextInput
            value={filter.search}
            placeholder="Pesquisar"
            onChange={onChangeSearch}
          />
          <NumberInput
            value={filter.balance}
            label="Faturamento mínimo esperado"
            onChange={onChangeBalance}
          />
        </FilterContainer>

        <DataContainer>
          <Table columns={columns} data={filteredData} />
          <Map data={markers} filter={filter.search} balance={filter.balance} />
        </DataContainer>
      </Container>
    </>
  );
};
