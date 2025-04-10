import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Ibm from "./pages/ibm/Ibm";
import Disney from "./pages/disney/Disney";
import Louis from "./pages/louis-vuitton/Louis";
import MasterCard from "./pages/masterCard/MasterCard";
import PizzaHunt from "./pages/pizza-hut/PizzaHut";
import BankOfAmerica from "./pages/bankOfAmerica/BankOfAmerica";
import Map from "./pages/map/Map";

const App = () => {
  return (
    <div className="flex">
      <div className="w-[280px] fixed h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col ml-[280px]">
        <Topbar />

        <div className="p-6 flex-1 bg-gray-100 overflow-y-auto">
          <Routes>
            <Route path="/nintendo" element={<Dashboard />} />
            <Route path="/ibm" element={<Ibm />} />
            <Route path="/disney" element={<Disney />} />
            <Route path="/louis-vuitton" element={<Louis />} />
            <Route path="/mastercard" element={<MasterCard />} />
            <Route path="/nintendo" element={<Dashboard />} />
            <Route path="/pizza-hut" element={<PizzaHunt />} />
            <Route path="/bank-of-america" element={<BankOfAmerica />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
