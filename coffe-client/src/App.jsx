import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeCard from "./components/CoffeCard";
function App() {
  const data = useLoaderData();
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!: {data.length}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((coffee) => (
          <CoffeCard key={coffee._id} coffees={coffee} />
        ))}
      </div>
    </>
  );
}

export default App;
