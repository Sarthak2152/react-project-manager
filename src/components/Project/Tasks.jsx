import Container from "../UI/Container";
import AddTask from "./AddTask";
import { Context } from "../../state/ProjectProvider";
import { useContext } from "react";
function TaskList(props) {
  return (
    <li className="flex justify-between items-center">
      <p>{props.desc}</p>
      <button
        onClick={() => {
          props.onClear(props.index);
        }}
        className="hover:text-red-500">
        Clear
      </button>
    </li>
  );
}

function Tasks() {
  const ctx = useContext(Context);
  const currentProject = ctx.projects.find((project) => {
    return project.id === ctx.selected;
  });
  //Clearing task from given project
  function onClearHandler(index) {
    console.log(
      "task: ",
      ctx.projects[ctx.selected].tasks[index],
      "index: ",
      index
    );
    ctx.setProjects((prevState) => {
      const updatedState = prevState.map((project) => {
        if (project.id === ctx.selected) {
          project.tasks = project.tasks.filter((task, i) => {
            return i !== index;
          });
          return project;
        } else return project;
      });
      return updatedState;
    });
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-slate-800 mb-6">Tasks</h1>
      <AddTask></AddTask>
      {currentProject.tasks.length === 0 ? (
        <p className="text-slate-800">
          This project does not have any tasks yet.
        </p>
      ) : (
        <Container>
          <ul className="space-y-3 list-none">
            {currentProject.tasks.map((task, index) => {
              return (
                <TaskList
                  onClear={onClearHandler}
                  index={index}
                  key={index}
                  desc={task}></TaskList>
              );
            })}
          </ul>
        </Container>
      )}
    </div>
  );
}

export default Tasks;

<h1>Tasks</h1>;
