import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
  return(
    <div>
      <div className="input-field col s12">
        <label htmlFor="username">{label}</label>
        <input classID="username"
          type={type}
          name={field}
          value={value}
          onChange={onChange}
          className="validate"
          />
        {error && <span className="errorMsg">{error}</span>}
      </div>
    </div>
  );

}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
