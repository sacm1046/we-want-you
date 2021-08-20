import "./style.scss";

export default function Title(props) {
  const { title, subTitle } = props;
  return (
    <>
      <h1 className="msg-header">{title}</h1>
      <h2 className="msg-sub-header">{subTitle}</h2>
    </>
  );
}
