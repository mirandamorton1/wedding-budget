import Vendor from "./Vendor";
import React, { useContext } from "react";
import { AppContext, AppContextType } from "../context/AppContext";

interface VendorProps {
  id: number;
  name: string;
  cost: number;
  paid: number;
  dueDate: string;
  dispatch: React.Dispatch<Dispatch>;
}

interface Dispatch {
  type: string;
  payload?: any;
}

interface Vendor extends VendorProps {
  id: number;
}

const VendorList = () => {

  const { vendors } = useContext<AppContextType>(AppContext);

  return (
    <>
      <table>
          <tbody >
            {vendors.map((vendor, index) => (
              <Vendor
                key={index}
                id={vendor.id}
                name={vendor.name}
                cost={vendor.cost}
                paid={vendor.paid}
                dueDate={vendor.dueDate}
             
              />
            ))}
          </tbody>
      </table>
    </>
  );
};

export default VendorList;
