import React, { Component } from 'react';
import { getAccountInfo } from "../utils/wallet";

class accountinfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            pk:props.title,
            info:null
        }

    }

 

    async componentDidMount() {

        const info = await getAccountInfo(this.state.pk)
        this.setState({info:info})

    }


    render() {
        return (
            <div>
            <h4>{this.state.pk.toString()}</h4>
            <h4>{this.state.info/1000000000}</h4>
            </div>
        );
    }
}



export default accountinfo;