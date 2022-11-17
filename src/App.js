import Header from "./components/Header";
import { servicesOffered } from "./data";
import ListOfServices from "./components/ListOfServices";
import About from "./components/About";

function App() {

  return (
    <div>
      <Header />
      <ListOfServices services={servicesOffered} />
      <About />
    </div>
  );
}

export default App;
