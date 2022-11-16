import Header from "./components/Header";
import Services from './components/Services'
import Service from "./components/Service";
import { servicesOffered } from "./data";
import ListOfServices from "./components/ListOfServices";

function App() {

  return (
    <div>
      <Header />
      <ListOfServices services={servicesOffered}/>
      {/* <Services /> */}
      {/* <Service /> */}
    </div>
  );
}

export default App;
