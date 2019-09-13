import React, { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Gauge from 'react-svg-gauge';
import * as $ from 'jquery'
import './styles.css'
import fire from '../../Config/Fire'
export default class UserDashboard extends Component {

    constructor() {
        super();
        this.logout = this.logout.bind(this)
        this.state = {
            token: null,
            waterData: 0,
            waterFlow: 0
        }

    }
    logout() {
        fire.auth().signOut()
    }
    componentDidMount() {
        $.ajax({
            url: "https://api.thinger.io/v2/users/husamgh/devices/ard1/SONIC",
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJhcmQxIiwiaWF0IjoxNTY3NDMyOTk0LCJqdGkiOiI1ZDZkMjEyMjIyNzc5NGVjOTA4NTI5Y2MiLCJyZXMiOlsiU09OSUMiLCJTT05JQ18yIiwiRmxvdyBtZXRlciJdLCJ1c3IiOiJodXNhbWdoIn0.zNCvFJHuXoGYZialB3l7XXeyAfFjpILHzztupMYWAI0");
            },
            success: (data) => {
                console.log("success")
                console.log(data)
                this.setState({ waterData: data.out })
            }
        });

        $.ajax({
            url: "https://api.thinger.io/v2/users/husamgh/devices/ard1/Flow meter",
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJhcmQxIiwiaWF0IjoxNTY3NDMyOTk0LCJqdGkiOiI1ZDZkMjEyMjIyNzc5NGVjOTA4NTI5Y2MiLCJyZXMiOlsiU09OSUMiLCJTT05JQ18yIiwiRmxvdyBtZXRlciJdLCJ1c3IiOiJodXNhbWdoIn0.zNCvFJHuXoGYZialB3l7XXeyAfFjpILHzztupMYWAI0");
            },
            success: (data) => {
                console.log("success")
                console.log(data)
                this.setState({ waterFlow: data.out })
            },
            failure: (data) => {
                console.log(data)
            }
        });
    }

    handleSubmit = (event) => {

        event.preventDefault();
        this.props.history.push('/UserDashboard')
    };

    render() {
        const vol = this.state.waterData;
        // for the water speedm, to declare the flo0w meter value from the api
        const flowmeter = this.state.waterFlow;
        return (
            <div className='userDashboard'>
                <div>
                    <h1>You are home</h1>
                    <button onClick={this.logout}>Logout</button>
                </div>
                <p className='WaterChartHolder'>Water Volume in the Tank.</p>
                <Gauge value={vol} width={400} height={320} label="Liters" color={"#005dfe"} valueLabelStyle={5} max={1300} />
                <p className='WaterChartHolder'>Incoming Water Speed Liters/MIN</p>
                <ReactSpeedometer value={flowmeter} needleColor="red" startColor="green" segments={10} endColor="blue" maxValue={130} />
            </div>
        );
    }
}
