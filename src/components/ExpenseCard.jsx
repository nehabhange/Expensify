import React from 'react'
import {Card,CardContent, Typography,Box,makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
    container:{
        display:'flex',
        '& > *':{
            padding:10,
            flex:1,
        }

    },
    income:{
        color:'green',
        fontFamily:'Roboto Slab',
    },
    expense:{
        color:'red',
        fontFamily:'Roboto Slab',
        
    }
})
function ExpenseCard({transactions}) {
    const classes=useStyles();
    const amount=transactions.map(transaction=>transaction.amount)
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0) * -1).toFixed(2);
    return (
        <Box className={classes.container}>       
        <Card>
            <CardContent >
                <Typography style={{fontFamily:'Roboto Slab',fontSize:25}} >
                    Income
                </Typography>
                <Typography className={classes.income}>
                +₹{income}
                </Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent >
                <Typography style={{fontFamily:'Roboto Slab',fontSize:25}} >
                    Expense
                </Typography>
                <Typography className={classes.expense}>
                -₹{expense}
                </Typography>
            </CardContent>
        </Card>
        </Box>
    )
}

export default ExpenseCard
