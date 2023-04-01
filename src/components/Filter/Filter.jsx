import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilterValue } from 'redux/filter/selectors';
import { StyledLabel, StyledInput } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  return (
    <StyledLabel>
      Find contacts by name
      <StyledInput
        name="filter"
        type="text"
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
        value={filterValue}
      />
    </StyledLabel>
  );
}

export default Filter;
