import UseCallback from "./hooks/UseCallback";
import UseMemo from "./hooks/UseMemo";
import UseReducer from "./hooks/UseReducer";
import UseRef from "./hooks/UseRef";
import useLocalStorage from "./hooks/customHooks/useLocalStorage";
import useUpdateLogger from "./hooks/customHooks/useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default App;
