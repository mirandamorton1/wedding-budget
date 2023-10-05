import { useState } from 'react';

interface EditBudgetProps {
    budget: number;
    handleSaveClick: (value: number) => void
}

const EditBudget: React.FC<EditBudgetProps> = ({ budget, handleSaveClick }) => {
    const [value, setValue]=useState<number>(budget);


  return (
    		<>
			<div className="editBudgetBtn">
			<input
				required
				type='number'
				className='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(Number(event.target.value))}
			/>
			<br></br>
			<button
				type='button' id="saveBtn2"
				className='btn btn-primary'
				onClick={() => handleSaveClick(value)}
			>
				Save
			</button>
			</div>
		</>
  )
}

export default EditBudget