import "./style.scss";

export default function InputSearch(props) {
  const { placeholder, onChange, value } = props;
  return (
    <div className="input-control">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
