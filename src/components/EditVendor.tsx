import { useState } from "react";

interface Vendor {
  id: number;
  name: string;
  cost: number;
  paid: number;
  dueDate: number;
}

interface EditVendorProps {
  vendor: Vendor[];
  handleSaveVendor: () => void;
}

const EditVendor: React.FC<EditVendorProps> = ({
  handleSaveVendor,
}) => {

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [paid, setPaid] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <>
      <div className="row">
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
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => handleSaveVendor()}
      >
        Save
      </button>
    </>
  );
};

export default EditVendor;
