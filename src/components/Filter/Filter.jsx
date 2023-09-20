import PropTypes from 'prop-types';
import {Label, Span} from './Filter.styled'

export function Filter({ valueFilter, onChangeFilter }) {
  return (
    <Label>
      <Span> Find contacts by name </Span>
      <input
        placeholder="Search"
        type="text"
        value={valueFilter}
        onChange={onChangeFilter}
      />
    </Label>
  );
}

Filter.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
