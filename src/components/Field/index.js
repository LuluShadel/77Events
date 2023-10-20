import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder, fieldType }) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type={fieldType} required  // rajout de required  ajout de la prop type afin de changer le type pour l'email
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = <textarea name={name} required data-testid="field-testid" />;
      break;
    default:
      component = (
        <input
          type="text" required // rajout de required 
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
        />
      );
  }
  return (
    <div className="inputField">
      <span>{label}</span>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  fieldType : PropTypes.string
};
 Field.defaultProps = {
   label: "",
   placeholder: "",
   type: FIELD_TYPES.INPUT_TEXT,
   name: "field-name",
   fieldType : ""
 }

export default Field;
