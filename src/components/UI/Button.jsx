function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="px-6 inline-block py-2 bg-slate-700 text-slate-300 rounded-lg hover:text-slate-100 hover:bg-slate-600 active:ring-2 ring-offset-2">
      {props.children}
    </button>
  );
}

export default Button;

//px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-800
