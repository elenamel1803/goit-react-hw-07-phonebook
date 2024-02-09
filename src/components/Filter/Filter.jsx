import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelectors';
import { Label, Input } from './FilterStyled';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};

export default Filter;
