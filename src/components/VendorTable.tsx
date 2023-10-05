import { useContext } from "react";
import Vendor from "./Vendor";
import { AppContext, AppContextType } from "../context/AppContext";
import '../App.css'



const VendorTable = () => {

  const { vendors } = useContext<AppContextType>(AppContext);
  
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Vendor</th>
            <th scope="col">Cost</th>
            <th scope="col">Amount Paid</th>
            <th scope="col">Difference</th>
            <th scope="col">Due Date</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {vendors?.map((vendor) => (
  <Vendor key={vendor.id} {...vendor} />
))}
      </tbody>
      </table>
    );
  };

export default VendorTable