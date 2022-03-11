import {Box,TextField,Typography,makeStyles,Button} from '@material-ui/core';
import { useState } from 'react';

const useStyles=makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        
        '& > *':{
            marginTop:10,
        }
    },
    add:{
        fontFamily:'Roboto Slab',
        fontSize:25,
    },
    button:{
        background:'#722626',
        color:'white',
        fontFamily:'Roboto Slab',
        fontSize:20,
       
        
    }
})

const NewTransaction = ({addTransaction}) =>{
    const classes=useStyles();
    const [text, setText] = useState('');
    const [amount,setAmount] = useState();

    const newTransaction=e=>{
        const transaction={
            id:Math.floor(Math.random()*10000),
            text:text,
            amount:+amount,
        }
        addTransaction(transaction);
    }
    return(
        <Box className={classes.container}>
            <Typography variant="h5 " className={classes.add}>
                New Transaction
            </Typography>
            <TextField className={classes.add} label="Enter Expense" onChange={(e)=>setText(e.target.value)}/>
            <TextField className={classes.add} label="Total Amount" onChange={(e)=>setAmount(e.target.value)}/>
            <Button  className={classes.button} variant="contained" onClick={newTransaction}>Add New Transaction</Button>
        </Box>

    )

}

export default NewTransaction;