import React, { Component } from "react";
import { generateMnemonicAndSeed, getAddressFromSeed, mnemonicToSeed } from "../utils/wallet";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import * as solanaWeb3 from "@solana/web3.js";
import * as crypto from "crypto";
import * as bs from "bs58";
class newuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mnemonic: {},
      isdownladed: true,
      publicaddress: "",
      privateaddress: "",
      name: "",
      password: "",
    };
  }

  async componentDidMount() {
    const mnemonic = await generateMnemonicAndSeed();
    this.setState({ mnemonic: mnemonic });
    console.log(this.state.mnemonic);
    const seed = await mnemonicToSeed(this.state.mnemonic.mnemonic);
    console.log(seed);
    const address = await getAddressFromSeed(seed)
    this.setState({ publicaddress: address.publicKey.toString() });
    this.setState({ privateaddress: address.secretKey });
    var pk = new solanaWeb3.Account(this.state.privateaddress);
    console.log(pk);
  }

  downloadMnemonic = (mnemonic) => {
    const url = window.URL.createObjectURL(new Blob([mnemonic]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "sollet.bak");
    document.body.appendChild(link);
    link.click();
    this.setState({ isdownladed: false });
  };

  savetolocalstorage = () => {
   
    // var crypto = require("crypto");
    // var id = crypto.randomBytes(4).toString("hex");
    // var name = this.state.name + "#" + id;
    localStorage.setItem("secretkey", bs.encode(this.state.privateaddress));
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("password", this.state.password);
    this.props.history.push('/')
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleChange1 = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <textarea value={this.state.mnemonic.mnemonic}  />
        <br />
        <button
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
          onClick={() => {
            this.downloadMnemonic(this.state.mnemonic.mnemonic);
          }}
        >
          Download
        </button>
        <br />
        {console.log(this.state.isdownladed)}
        {this.state.isdownladed ? (
          <h1>Download the mnemonic</h1>
        ) : (
          <div>
            <h1>{this.state.publicaddress}</h1>
            <label>
              Name
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange1}
              />
            </label>
            <button
              onClick={() => {
                this.savetolocalstorage();
              }}
            >
              contiune
            </button>
          </div>
        )}
      </div>
    );
  }
}

newuser.propTypes = {};

export default newuser;
