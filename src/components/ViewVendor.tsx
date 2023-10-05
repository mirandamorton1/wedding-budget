import { AiFillEdit } from 'react-icons/ai';

interface ViewVendorProps {
    handleEditVendor: () => void;
  }
  
  const ViewVendor: React.FC<ViewVendorProps> = ({ handleEditVendor }) => {
  
    return (
         <>
              <AiFillEdit size='2em' onClick={handleEditVendor}></AiFillEdit>
            
          </>
    )
  }
  
  export default ViewVendor