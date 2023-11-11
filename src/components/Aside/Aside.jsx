import Button from "../UI/Button";
import { Context } from "../../state/ProjectProvider";
import { useContext } from "react";
function ListItem(props) {
  let active = "";
  if (props.isActive === props.id) {
    active = " text-slate-200 bg-slate-800";
  }
  return (
    <li
      onClick={() => {
        props.clickHandler(props.id);
      }}
      className={`hover:text-slate-200 hover:cursor-pointer m rounded-md hover:bg-slate-800 px-1 py-1 ${active}`}>
      {props.children}
    </li>
  );
}
function Aside() {
  const ctx = useContext(Context);
  function onClickHandler(id) {
    ctx.setAddNew(false);
    ctx.setSelected((prevState) => {
      return id;
    });
  }
  return (
    <div className="bg-slate-900 w-[95%] sm:w-1/4 rounded-r-2xl py-8 sm:py-12 px-5 xl:w-[20%]">
      <h1 className="text-xl sm:text-2xl mb-6 font-bold uppercase text-slate-200 sm:mb-10">
        your projects
      </h1>
      <Button
        onClick={() => {
          ctx.setAddNew(true);
          ctx.setSelected(null);
        }}>
        + Add project
      </Button>
      <ul className="flex space-x-2 overflow-x-auto sm:block list-none text-slate-400 mt-6 sm:space-x-0 sm:space-y-2">
        {ctx.projects.map((project) => {
          return (
            <ListItem
              isActive={ctx.selected}
              clickHandler={onClickHandler}
              id={project.id}
              key={project.id}>
              {project.title}
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
}

export default Aside;
