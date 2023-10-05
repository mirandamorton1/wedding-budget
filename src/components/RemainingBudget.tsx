import { useContext } from "react";
import { AppContext, AppContextType } from "../context/AppContext";

const RemainingBudget = () => {
  const { vendors, budget } = useContext<AppContextType>(AppContext);
  const totalVendorExpenses = vendors.reduce(
    (total, item) => (total = total + item.cost),
    0
  );
  const alertType =
    totalVendorExpenses > budget ? "alert-danger" : "alert-success";
  const spentPercentage = (totalVendorExpenses / budget) * 100;

  return (
    <>
      <div
        className="progressBar"
        style={{ border: "1px solid #99b89a", height: "20px", background: "white" }}
      >
        <div className="progressBarFill"
          style={{
            width: `${spentPercentage}%`,
            height: "20px",
            backgroundColor: "#99b89a",
          }}
        ></div>
        <div className="progress-text">
          <small>Spent: ${totalVendorExpenses}</small>
          <small> Remaining: ${budget - totalVendorExpenses}</small>
        </div>
      </div>

    </>
  );
};

export default RemainingBudget;
