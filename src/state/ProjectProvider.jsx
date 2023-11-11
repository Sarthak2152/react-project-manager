import { createContext, useState } from "react";

export const Context = createContext({
  projects: [],
  setProjects: () => {},
  selected: null,
  setSelected: () => {},
  addNew: false,
  setAddNew: () => {},
});

function ProjectProvider(props) {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [addNew, setAddNew] = useState(false);
  return (
    <Context.Provider
      value={{
        projects,
        setProjects,
        selected,
        setSelected,
        addNew,
        setAddNew,
      }}>
      {props.children}
    </Context.Provider>
  );
}

export default ProjectProvider;
