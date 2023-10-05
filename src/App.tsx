import Header from "./components/Header";
import Budget from "./components/Budget";
import AddVendor from "./components/AddVendor";
import RemainingBudget from "./components/RemainingBudget";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import "bootstrap/dist/css/bootstrap.css";
import VendorTable from "./components/VendorTable";

function App() {
  return (
    <>
      <AppProvider>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <Header />
            </div>
            <div className="col-md-4 col-12">
              <div className="inner-wrapper">
                <Budget />
                <RemainingBudget />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm mt-2">
              <VendorTable />
            </div>
          </div>
          <div className="mt-3">
            <div className="col-sm">
              <AddVendor />
            </div>
          </div>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
