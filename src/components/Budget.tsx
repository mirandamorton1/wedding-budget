import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import EditBudget from "./EditBudget"
import ViewBudget from "./ViewBudget"



interface Dispatch {
  type: string;
  payload?: any;
}

const Budget = () => {
  const { dispatch } = useContext(AppContext) as { dispatch: React.Dispatch<Dispatch>}
  
  const { budget } = useContext(AppContext) as { budget: number }

  const [isEditing, setIsEditing] =useState<boolean>(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = (value: number) => {
    dispatch({
      type: 'save_budget',
      payload: value,
    });
    setIsEditing(false)
  }



  return (
    <>
		<div>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
    </>
  )
}

export default Budget