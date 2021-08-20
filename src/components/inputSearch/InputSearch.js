import { useState } from "react";
import { hasData } from "../../utils/hasData";
import PropTypes from "prop-types";
import Search from "../icons/Search";
import { color } from "../../utils/systemColors";
import "./style.scss";

export default function InputSearch(props) {
  const { placeholder, onChange, value, suggestions, onClick } = props;
  const [showSuggestions, setShowSuggestions] = useState(true);

  const renderSuggestions = () => (
    <div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          onClick={() => {
            onClick(suggestion);
            onChange(suggestion.name);
            setShowSuggestions(false);
          }}
        >
          {`${suggestion.name} - ${suggestion.artist}`}
        </div>
      ))}
      <small onClick={() => {
        setShowSuggestions(false)
        onChange("");
        onClick(null)
        }}>Limpiar</small>
    </div>
  );

  const handleChange = (e) => {
    onChange(e.target.value);
    setShowSuggestions(true);
  };

  return (
    <div className="input-control">
      <span>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <Search size={25} color={color.primary} />
      </span>
      {(hasData(suggestions) && hasData(value) && showSuggestions) && renderSuggestions()}
    </div>
  );
}

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  suggestions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

