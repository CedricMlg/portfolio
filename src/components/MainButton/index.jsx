export default function MainButton({ props, handleClick }) {
  return (
    <button onClick={handleClick} className="main-button" type={props.text}>
      <span className="text">{props.text}</span>
      <span>{props.hidden}</span>
    </button>
  );
}
