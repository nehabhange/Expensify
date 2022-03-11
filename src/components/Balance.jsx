import {Box,Typography,makeStyles} from '@material-ui/core';
import { useState } from 'react';

const useStyles=makeStyles({
    balance:{
        fontSize:25,
        marginBottom:20,
        fontFamily:'Roboto Slab',       
    }
    
})
const Balance = ({transactions}) =>{
    const classes=useStyles();
    const [balance, setBalance] = useState(0);
    const amount=transactions.map(transaction=>transaction.amount)
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);


    return(
        <Box>
            <Typography className={classes.balance}>Balance ₹{total}</Typography>
        </Box>

    )
}
export default Balance;