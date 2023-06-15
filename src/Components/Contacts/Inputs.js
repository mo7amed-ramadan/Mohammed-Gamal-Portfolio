function Inputs(props) {
  return (
    <>
      <label
        htmlFor={props.forLabel}
        id={props.id}
        className={props.labelClass}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        className={props.inputClass}
        name={props.name}
        value={props.value}
        onChange={props.function}
        required
      />
    </>
  );
}

export default Inputs;
