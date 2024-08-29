import { useSelector } from 'react-redux';
import { Cell, Table } from '../../../components';
import { DataType } from '../types';
import { RootState } from '../../../store';
import { filterData } from '../helpers';

export function TableContent() {
  const {
    data: { data, filter }
  } = useSelector((state: RootState) => state);

  const { filteredData } = filterData(data, filter.search);

  const columns = [
    {
      key: 'name',
      title: 'Loja',
      render: (item: DataType) => (
        <Cell $highlight={item.revenue <= filter?.balance}>{item.name}</Cell>
      )
    },
    {
      key: 'revenue',
      title: 'Faturamento',
      render: (item: DataType) => (
        <Cell $highlight={item.revenue <= filter?.balance}>{item.revenue}</Cell>
      )
    }
  ];

  return (
    <Table columns={columns} data={filteredData.length ? filteredData : []} />
  );
}
