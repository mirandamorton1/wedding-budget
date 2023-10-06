import { useContext } from "react";
import { AppContext, AppContextType } from "../context/AppContext";

const RemainingBudget = () => {
  const { vendors, budget } = useContext<AppContextType>(AppContext);
  const totalVendorExpenses = vendors.reduce(
    (total, item) => (total = total + item.cost),
    0
  );
  const spentPercentage = (totalVendorExpenses / budget) * 100;

  return (
    <>
      <div
        className="progressBar"
        style={{ border: spentPercentage >= 100 ? "none" : "1px solid #99b89a", height: "20px", background: "white", width: `${budget}` }}
      >
        <div className="progressBarFill"
          style={{
            width: `${spentPercentage}%`,
            maxWidth: `${budget}%`,
            height: "20px",
            backgroundColor: spentPercentage >= 100 ? "red" : "#99b89a",

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
