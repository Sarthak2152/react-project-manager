import photo from "../../assets/no-projects.png";
import Button from "../UI/Button";
import WrapperCenterFlex from "../UI/WrapperCenterFlex";
import { Context } from "../../state/ProjectProvider";
import { useContext } from "react";
function NoProject() {
  const ctx = useContext(Context);

  return (
    <WrapperCenterFlex>
      <section className=" text-center w-[90%] sm:w-1/2 space-y-4">
        <img
          className="mx-auto w-[75px] h-[75px]"
          src={photo}
          alt="logo of website"
        />
        <h1 className="text-2xl font-bold text-slate-500">
          No Project Selected
        </h1>
        <p className="text-md text-slate-400">
          Select a project or get started with a new one
        </p>
        <Button
          onClick={() => {
            ctx.setAddNew(true);
          }}>
          Create new project
        </Button>
      </section>
    </WrapperCenterFlex>
  );
}

export default NoProject;
