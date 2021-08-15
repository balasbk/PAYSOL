import React, { Component } from 'react';
import { generateMnemonicAndSeed, getAddressFromSeed ,mnemonicToSeed,getAccountInfo} from "../utils/wallet";
import * as solanaWeb3 from '@solana/web3.js';
import * as bip32 from 'bip32'
import * as bs from "bs58";

class olduser extends Component {
    constructor(props) {
        super(props);
        this.state={
            seed:"",
            publicaddress:"",
            privateaddress:""
        }

    }



    componentDidMount() {



    }

    handleChange=(event)=> {
        this.setState({seed: event.target.value});
      }

    getpublicaddress=async()=>{
        const seed = await mnemonicToSeed(this.state.seed)
        console.log(seed)
        const address = await getAddressFromSeed(seed);
        console.log(address.secretKey);
        this.setState({ publicaddress: address.publicKey.toString() });
        this.setState({ privateaddress: address.secretKey });
        console.log(this.state.publicaddress)
        const info = await getAccountInfo(address.publicKey)
        localStorage.setItem("secretkey", bs.encode(this.state.privateaddress));
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
        <label>
           Enter your mnemonic
          <textarea type="text" value={this.state.seed} onChange={this.handleChange} />
        </label>
        <br/>
        <button onClick={() => {
                this.getpublicaddress();
              }}>contiune</button>
            </div>
        );
    }
}



export default olduser;
