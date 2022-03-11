import logo from "./logo.svg";
import "./App.css";
import { Typography, makeStyles, Box } from "@material-ui/core";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransaction from "./components/NewTransaction";
import Transactions from "./components/Transactions";
import { useState } from "react";


const useStyles = makeStyles({
    header: {
        color: "#722626",
        fontSize: 35,
        fontFamily: "Roboto Slab",
        margin: "10px 0",
        textTransform: "uppercase",
        fontWeight: 800,

    },
    component: {
        background: "#fff",
        width: 800,
        padding: 10,
        borderRadius: 20,
        display: "flex",
        "&>*": {
            width: "50%",
            padding: 10,
            height: "70vh",
        },
    },
});

function App() {
    const classes = useStyles();
    const [transactions, setTransaction] = useState([
        { id: 1, text: "Momos", amount: -20 },
        { id: 2, text: "Salary", amount: 3000 },
        { id: 3, text: "Book", amount: -100 },
    ]);

    const deleteTransaction = (id) => {
        setTransaction(transactions.filter((transaction) => transaction.id !== id));
    };

    const addTransaction = (transaction) => {
        setTransaction((transactions) => [transaction, ...transactions]);
        console.log(transaction);
        console.log(transactions);
    };

    return ( <
        div className = "App" >
        <
        Typography className = { classes.header } > Expensify < /Typography> <
        Box className = { classes.component } >
        <
        Box >
        <
        Balance transactions = { transactions }
        /> <
        ExpenseCard transactions = { transactions }
        /> <
        NewTransaction addTransaction = { addTransaction }
        /> < /
        Box > <
        Transactions transactions = { transactions }
        deleteTransaction = { deleteTransaction }
        /> < /
        Box > <
        /div>
    );
}

export default App;