import Header from "./components/Header";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";

function App() {
  return (
    <div className="bg-bod min-h-screen">
      <Header />

      <div className="grid lg:grid-cols-[300px_1fr_380px] gap-4 p-4">
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;