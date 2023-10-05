import { MdOutlineDeleteOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { useContext } from 'react';
import { AppContext, AppContextType } from '../context/AppContext';



interface VendorProps {
  id: number;
  name: string;
  cost: number;
  paid: number;
  dueDate: number;

}

const Vendor: React.FC<VendorProps> = ({ id, name, cost, paid,  dueDate }) => {

  const { dispatch } = useContext<AppContextType>(AppContext);

  const handleEditVendor = () => {

  }

  const handleDeleteExpense =  () => {
    dispatch({
      type: 'delete_vendor',
      payload: id
    })
  }


  return (
<>
    <tr>
      <td>{name}</td>
      <td>${cost}</td>
      <td>${paid}</td>
      <td>${cost - paid}</td>
      <td>{dueDate}</td>
      <td><AiOutlineEdit size='1.5em' onClick={handleEditVendor}></AiOutlineEdit></td> 
     <td><MdOutlineDeleteOutline size='1.5em' onClick={handleDeleteExpense}></MdOutlineDeleteOutline></td> 
    </tr>

    </>
  )
}

export default Vendor;

