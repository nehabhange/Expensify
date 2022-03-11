import React from 'react';
import { ListItem,ListItemText,makeStyles,ListItemIcon } from '@material-ui/core';
import { ColorLensTwoTone, DeleteOutlined } from '@material-ui/icons';

const useStyles=makeStyles({
    list:{
        marginTop:10,
        
        border:'1px solid black',
    },
    add:{
        fontfamily:'Roboto Slab',
        fontSize:10,
    },
})
const MakeTransaction=({transaction,deleteTransaction})=> {
    const classes=useStyles();
    const color=transaction.amount >=0 ? 'Green':'Red';
    const sign=transaction.amount >=0 ? '₹' : '-₹';
    const amount=sign+Math.abs(transaction.amount);
    return (
       <ListItem className={classes.list} style={{background:`${color}`}}>
           <ListItemIcon>
               <DeleteOutlined onClick={()=>deleteTransaction(transaction.id)} />
           </ListItemIcon>
           <ListItemText style={{fontFamily:'Roboto Slabs'}} primary={transaction.text}/>
           <ListItemText style={{fontFamily:'Roboto Slabs'}}   primary={amount}/>

           
       </ListItem>
    )
}

export default MakeTransaction
