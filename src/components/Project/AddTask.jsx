import { useState, useContext } from "react";
import { Context } from "../../state/ProjectProvider";
function AddTask() {
  const ctx = useContext(Context);
  const [taskDesc, setTaskDesc] = useState("");
  // adding new task to existing project
  function onSubmitHandler(event) {
    event.preventDefault();
    if (taskDesc.trim().length === 0) return;
    ctx.setProjects((prevState) => {
      const updatedState = prevState.map((project) => {
        if (project.id === ctx.selected) {
          project.tasks = [taskDesc, ...project.tasks];
          return project;
        } else return project;
      });
      return updatedState;
    });
    setTaskDesc("");
  }
  return (
    <div className="w-[90%] mb-8">
      <form onSubmit={onSubmitHandler}>
        <div className="flex justify-between space-x-4">
          <input
            onChange={(event) => {
              setTaskDesc(event.target.value);
            }}
            value={taskDesc}
            type="text"
            className="bg-slate-200 p-1 border-b-2 rounded-md border-slate-300 focus:outline-none focus:border-slate-600 flex-auto "
          />
          <button className="hover:text-green-600">Add task</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
