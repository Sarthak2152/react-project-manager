import NoProject from "../NoProject/NoProject";
import AddProject from "../AddProject/AddProject";
import Project from "../Project/Project";
import { Context } from "../../state/ProjectProvider";
import { useContext } from "react";
function Main() {
  const ctx = useContext(Context);
  return (
    <div className="w-full sm:w-3/4 xl:w-[80%]">
      {ctx.selected === null && ctx.addNew === false && <NoProject />}
      {ctx.addNew === true && <AddProject></AddProject>}
      {ctx.selected !== null && ctx.addNew === false && <Project></Project>}
    </div>
  );
}

export default Main;
