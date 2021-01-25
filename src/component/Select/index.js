import React from 'react';

import PropTypes from 'prop-types';
import MaterialSelect from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const MenuItem = ({ value, listItem }) => {
  return <option value={value}>{listItem}</option>
};

const Select = ({options, valueProp, keyProp, onChange, labelId, defaultValue}) => {
  return (
    <FormControl>
    <MaterialSelect
      native
      defaultValue={defaultValue}
      onChange={onChange}
      inputProps={{
        name: labelId,
        id: labelId,
      }}
    >
      {options && options.map((item, index)=> <MenuItem key={index} value={item[valueProp]} listItem={item[keyProp]} />)}
    </MaterialSelect>
    </FormControl>
  )
}

Select.defaultProps={
  options: [],
}

Select.prototype= {
  options: PropTypes.instanceOf(Array),
};

export default Select;
