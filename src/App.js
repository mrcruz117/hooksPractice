import UseCallback from "./hooks/UseCallback";
import UseMemo from "./hooks/UseMemo";
import UseReducer from "./hooks/UseReducer";
import UseRef from "./hooks/UseRef";
import useLocalStorage from "./hooks/customHooks/useLocalStorage";
import useUpdateLogger from "./hooks/customHooks/useUpdateLogger";
import ToggleComponent from "./testComponents/ToggleComponent";
import TimeoutComponent from "./testComponents/TimeoutComponent";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <>
      {/* <ToggleComponent /> */}
      <TimeoutComponent />
    </>
  );
}

export default App;
