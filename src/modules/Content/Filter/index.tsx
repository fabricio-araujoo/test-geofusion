import { useDispatch, useSelector } from 'react-redux';
import { NumberInput, TextInput } from '../../../components';
import { FilterContainer } from '../styles';
import { RootState } from '../../../store';
import { changeBalance, changeSearch } from '../../../reducer';
import { ChangeEvent } from 'react';

export function FilterContent() {
  const {
    data: { filter }
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const onChangeSearch = ({ target }: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeSearch(target.value));

  const onChangeBalance = ({ target }: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeBalance(target.value));

  return (
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
  );
}
