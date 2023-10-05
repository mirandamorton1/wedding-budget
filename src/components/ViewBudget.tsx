import { AiOutlineEdit } from "react-icons/ai";

interface ViewBudgetProps {
  budget: number;
  handleEditClick: () => void;
}

const ViewBudget: React.FC<ViewBudgetProps> = ({ budget, handleEditClick }) => {

  return (
    		<>
			<div className="budget-text">
			<span>My Budget: ${budget}</span>
			<AiOutlineEdit size='1em' onClick={handleEditClick}></AiOutlineEdit>
			</div>
		</>
  )
}

export default ViewBudget



