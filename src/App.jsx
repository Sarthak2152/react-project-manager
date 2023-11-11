import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

import ProjectProvider from "./state/ProjectProvider";
function App() {
  return (
    <ProjectProvider>
      <div className="w-full min-h-screen flex py-10 flex-col sm:flex-row space-y-10 sm:space-y-0">
        <Aside />
        <Main />
      </div>
    </ProjectProvider>
  );
}

export default App;
