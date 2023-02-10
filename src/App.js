import UseCallback from "./hooks/UseCallback";
import UseMemo from "./hooks/UseMemo";
import UseReducer from "./hooks/UseReducer";
import UseRef from "./hooks/UseRef";
import useLocalStorage from "./hooks/customHooks/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");
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
