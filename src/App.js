import { useRoutes } from "react-router";

import "./index.css";

function App() {
  const routing = useRoutes(Router);

 

  return (
    <React.Fragment>
      {routing}
    </React.Fragment>
  );
}
export default App;