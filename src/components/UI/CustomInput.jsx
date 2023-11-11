function CustomInput({ id, label, type, setter, ...rest }) {
  function onChangeHandler(event) {
    setter(event.target.value);
  }
  return (
    <div className="flex flex-col space-y-2 mb-7">
      {label && (
        <label className="uppercase font-semibold text-slate-700" htmlFor={id}>
          {label}
        </label>
      )}
      {type === "text-area" ? (
        <textarea
          onChange={onChangeHandler}
          id={id}
          {...rest}
          className="bg-slate-200 p-1 border-b-2 border-slate-300 focus:outline-none focus:border-slate-600"></textarea>
      ) : (
        <input
          id={id}
          onChange={onChangeHandler}
          type={type}
          {...rest}
          className="bg-slate-200 p-1 border-b-2 border-slate-300 focus:outline-none focus:border-slate-600 text-slate-600"></input>
      )}
    </div>
  );
}

export default CustomInput;
