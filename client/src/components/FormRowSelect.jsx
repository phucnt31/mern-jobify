import React from "react";

const FormRowSelect = ({
  name,
  labelText,
  list,
  defaultValue = "",
  onChange,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {list.map((status) => {
          return (
            <option value={status} key={status}>
              {status}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
