import "./ExpenseItems.css";
import ExpDate from "./ExpDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {


  return (
    <Card className="expense-item">
      <ExpDate date={props.date} />

      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">{props.amount}$</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
