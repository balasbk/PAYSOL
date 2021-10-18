import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import * as bs from "bs58";
import * as solanaWeb3 from '@solana/web3.js'; 
import { generateMnemonicAndSeed, getAddressFromSeed, mnemonicToSeed ,Transaction,getAccountInfo } from "../utils/wallet";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Sendtransaction() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
   const [value , setvalue]=React.useState(0);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputsHandler = (e) =>{
    setvalue( e.target.value )
}


  const sendtransaction=async()=>
  { 
      
      const from="C7bb1q388SbYqB6EYDMLCo2jXeCbWxDU8jf7rLy6wshM"
      const to="9ovWyEHUDhZSxYphWMj5ftTpBnBJCMwF7msWKSpG1tkb"
      const amount=value
      var pk = new solanaWeb3.Account(bs.decode(localStorage.getItem('secretkey')))
      console.log(pk)
     const address=pk
     var info = await getAccountInfo(pk.publicKey)
     var info =info/solanaWeb3.LAMPORTS_PER_SOL
     const totalsol = Number(amount) + Number(0.000005) 
     console.log(totalsol)
     console.log(info)
     if(info>=totalsol)
     {
     var status = await Transaction(from,to,amount,bs.decode(localStorage.getItem('secretkey')))
     console.log(status)
     setOpen(false);
     }
     else
     alert("insufficient balance")


  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        pay
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Typography variant="body2" align="center" color="textSecondary"   style={{ marginTop: 20 }} noWrap>
          To:9ovWyEHUDhZSxYphWMj5ftTpBnBJCMwF7msWKSpG1tkb
            </Typography>
          <br/>
          <TextField
          id="outlined-number"
          label="SOL Amount"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={inputsHandler} 
        />
       
        <br/>
        <br/>
        <TextField
          id="filled-number"
          label="Fee"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          disabled
          value="0.000005"
        />
        <br/>
        <br/>
        <Typography variant="body2" align="center" color="textSecondary" noWrap>
          `Total: {Number(value) + Number(0.000005) }`
            </Typography>
        <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 20 }}
                    onClick={() => {
                        sendtransaction()
                    }}
                  >
                   Pay
                  </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}