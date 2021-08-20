import { useState } from "react";
import { hasData } from "../../utils/hasData";
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
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {(hasData(suggestions) && hasData(value) && showSuggestions) && renderSuggestions()}
    </div>
  );
}
