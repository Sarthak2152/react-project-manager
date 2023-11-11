import Tasks from "./Tasks";
import Button from "../UI/Button";
import { Context } from "../../state/ProjectProvider";
import { useContext } from "react";

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function Project(props) {
  const ctx = useContext(Context);
  const currentProject = ctx.projects.find((project) => {
    return project.id === ctx.selected;
  });
  function onDeleteHandler() {
    ctx.setProjects((prevState) => {
      const afterDelete = prevState.filter((project) => {
        return project.id !== ctx.selected;
      });
      return afterDelete;
    });
    ctx.setSelected(null);
    ctx.setAddNew(false);
  }
  return (
    <div className="flex justify-center items-start">
      <section className="w-[90%] sm:w-1/2">
        {/* header */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold text-3xl text-slate-800">
              {currentProject.title}
            </h1>
            <p className="text-slate-400">{formatDate(currentProject.date)}</p>
          </div>
          <div>
            <Button onClick={onDeleteHandler}>Delete</Button>
          </div>
        </div>
        <p className="border-b-2 mb-7 text-slate-600 pb-4">
          {currentProject.desc}
        </p>
        <Tasks></Tasks>
      </section>
    </div>
  );
}

export default Project;
