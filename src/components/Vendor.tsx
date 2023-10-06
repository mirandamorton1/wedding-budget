import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useContext, useState } from "react";
import { AppContext, AppContextType } from "../context/AppContext";

interface VendorProps {
  id: number;
  name: string;
  cost: number;
  paid: number;
  dueDate: string;
}

const Vendor: React.FC<VendorProps> = ({ id, name, cost, paid, dueDate }) => {

  const { dispatch } = useContext<AppContextType>(AppContext);

  const [isEditing, setIsEditing] =useState(false)

  const handleEditVendor = () => {
    setIsEditing(!isEditing);
  }

  const [vendorName, setVendorName] = useState(name);
  const [vendorCost, setVendorCost] = useState(cost);
  const [vendorPaid, setVendorPaid] = useState(paid);
  const [vendorDueDate, setVendorDueDate] = useState(dueDate);

  const handleUpdateVendor = () => {
    const updatedVendor = { id, name: vendorName, cost: vendorCost, paid: vendorPaid, dueDate: vendorDueDate };
    dispatch({
      type: "update_vendor",
      payload: updatedVendor,
    });

    const storedVendors = localStorage.getItem('vendors');
    if (storedVendors) {
      const vendors = JSON.parse(storedVendors);
      const updatedVendors = vendors.map((vendor: { id: number; }) => vendor.id === updatedVendor.id ? updatedVendor : vendor);
      localStorage.setItem('vendors', JSON.stringify(updatedVendors));
    }

    setIsEditing(false);
  };

  const handleDeleteExpense = () => {
    dispatch({
      type: "delete_vendor",
      payload: id,
    });
  };

  return (
    <>
      <tr>
        {isEditing ? (
          <>
            <td><input value={vendorName} onChange={e => setVendorName(e.target.value)} /></td>
            <td><input value={vendorCost} onChange={e => setVendorCost(Number(e.target.value))} /></td>
            <td><input value={vendorPaid} onChange={e => setVendorPaid(Number(e.target.value))} /></td>
            <td>${cost - paid}</td>
            <td><input value={vendorDueDate} onChange={e => setVendorDueDate(e.target.value)} /></td>
            <td><button className="btn btn-success" onClick={handleUpdateVendor}>Update</button>
            </td>
            <td>
          <MdOutlineDeleteOutline
            size="1.5em"
            onClick={handleDeleteExpense}
          ></MdOutlineDeleteOutline>
        </td>
          </>
        ) : (
          <>
            <td>{name}</td>
            <td>${cost}</td>
            <td>${paid}</td>
            <td>${cost - paid}</td>
            <td>{dueDate}</td>
            <td>
          <AiOutlineEdit
            size="1.5em"
            onClick={handleEditVendor}
          ></AiOutlineEdit>
        </td>
        <td>
          <MdOutlineDeleteOutline
            size="1.5em"
            onClick={handleDeleteExpense}
          ></MdOutlineDeleteOutline>
        </td>
          </>
        )}
      </tr>
    </>
  );
};

export default Vendor;
