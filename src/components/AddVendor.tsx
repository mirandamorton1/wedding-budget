import { useState, useContext, useEffect } from "react";
import { AppContext, AppContextType } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

interface Dispatch {
  type: string;
  payload?: any;
}

const AddVendor = () => {
  const { dispatch } = useContext(AppContext) as {
    dispatch: React.Dispatch<Dispatch>;
  };
  const { vendors } = useContext<AppContextType>(AppContext)

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [paid, setPaid] = useState("");
  const [dueDate, setDueDate] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const vendor = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
      paid: parseInt(paid),
      dueDate: dueDate,
    };

    let vendors = localStorage.getItem('vendors');
    vendors = vendors ? JSON.parse(vendors) : [];
    
    if (Array.isArray(vendors)) {
      vendors.push(vendor);
    
      localStorage.setItem('vendors', JSON.stringify(vendors));
    } else {
      console.error('vendors is not an array');
    }

    setName(" ")
    setCost(" ")
    setPaid(" ")
    setDueDate(" ")

    dispatch({
      type: "add_vendor",
      payload: vendor,
    });
  };

  useEffect(() => {
    const storedVendors = localStorage.getItem('vendors');
    if (storedVendors) {
      const parsedVendors = JSON.parse(storedVendors);
      parsedVendors.forEach((vendor: typeof parsedVendors[0]) => {
        // Check if the vendor is already in the state
        if (!vendors.some((v) => v.id === vendor.id)) {
          dispatch({
            type: 'add_vendor',
            payload: vendor
          });
        }
      });
    }
  }, []);

  return (
    <>
    <h4 className="newVendor">New Vendor</h4>
    <form onSubmit={onSubmit}>
      <div className="row new">
        <div className="col-sm">
          <label>Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label>Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
          </div>
          <div className="col-sm">
            <label>Paid</label>
            <input
              required
              type="text"
              className="form-control"
              id="paid"
              value={paid}
              onChange={(event) => setPaid(event.target.value)}
            ></input>
          </div>
          <div className="col-sm">
            <label>Due Date</label>
            <input
              type="text"
              className="form-control"
              id="dueDate"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
            ></input>
          </div>
        </div>
        <div className="col-sm mt-3">
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
    </form>
    </>
  );
};

export default AddVendor;
