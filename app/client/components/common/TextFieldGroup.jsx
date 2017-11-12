import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup =
({ field, value, label, error, type, onChange, checkUserExits, className }) => {
  return (
    <div className={className}>
      <div className="input-field col s12">
        <label htmlFor="username">{label}</label>
        <input
          classID="username"
          type={type}
          name={field}
          value={value}
          onChange={onChange}
          onBlur={checkUserExits}
          className="validate"
          />
        {error && <span className="errorMsg">{error}</span>}
      </div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checkUserExits: PropTypes.func
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
