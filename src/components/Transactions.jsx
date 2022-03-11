
import React from 'react';
import {Box,Typography,Divider,makeStyles,List} from '@material-ui/core';
import MakeTransaction from './MakeTransaction';

const useStyle=makeStyles({
    component:{
        '&>*':{
            marginBottom:10,
            fontFamily:'Roboto Slab',
        }
    }
})
const Transactions=({transactions,deleteTransaction})=> {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            <Typography variant="h5">
                Transaction History
            </Typography>
            <Divider/>
            <List>
                {
                    transactions.map(transaction => {
                        return(<MakeTransaction  key={transaction.id}transaction={transaction} deleteTransaction={deleteTransaction}/>)
                    })
                }
            </List>
        </Box>
    )
}

export default Transactions
