import Button from "../UI/Button";
import CustomInput from "../UI/CustomInput";
import WrapperCenterFlex from "../UI/WrapperCenterFlex";
import { useState, useContext } from "react";
import { Context } from "../../state/ProjectProvider";

function getCurrentDateIST() {
  const options = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return new Date().toLocaleString("en-IN", options).slice(0, 10);
}
function convertDateFormat(inputDate) {
  const [day, month, year] = inputDate.split("/");
  const outputDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
    2,
    "0"
  )}`;
  return outputDate;
}
let currentDate = convertDateFormat(getCurrentDateIST());
console.log(currentDate);

function AddProject() {
  const ctx = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  function onSubmitHandler(event) {
    event.preventDefault();
    ctx.setProjects((prevState) => {
      const newProject = { title, desc, date, tasks: [], id: prevState.length };
      const updated = [...prevState, newProject];
      return updated;
    });
    resetHandler();
    console.log(ctx.projects);
  }
  function resetHandler() {
    setTitle("");
    setDesc("");
    setDate("");
    ctx.setSelected(null);
    ctx.setAddNew(false);
  }
  return (
    <WrapperCenterFlex>
      <form onSubmit={onSubmitHandler} className="w-[90%] sm:w-1/2">
        <div className="flex justify-end space-x-4 mb-5">
          <button
            type="button"
            onClick={resetHandler}
            className="text-slate-600 hover:text-slate-900">
            Cancel
          </button>
          <Button>Save</Button>
        </div>
        <CustomInput
          value={title}
          id={"title"}
          setter={setTitle}
          label={"title"}
          type={"text"}></CustomInput>
        <CustomInput
          id={"desc"}
          value={desc}
          setter={setDesc}
          label={"description"}
          type={"text-area"}></CustomInput>
        <CustomInput
          value={date}
          min={currentDate}
          setter={setDate}
          id={"date"}
          label={"due date"}
          type={"date"}></CustomInput>
      </form>
    </WrapperCenterFlex>
  );
}

export default AddProject;
