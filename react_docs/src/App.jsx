import Heading from "./components/Heading";
import Counter from "./components/Counter";
import ListItems from "./components/ListItems";
import GreetingPanel from "./components/GreetingPanel";

import { products } from "./data/products";

function App() {
  return (
    <div className="bg-slate-900 h-screen w-screen">
      <div className="w-11/12 m-auto">
        <Heading />

        <GreetingPanel />
        <ListItems products={products} />

        <div className="flex gap-10">
          <Counter />
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;
