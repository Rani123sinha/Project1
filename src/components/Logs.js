import React, { Component } from 'react';
class Logs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: "Loading..."
        }
    }
    async componentDidMount() {

        const response = await fetch("https://sheetdb.io/api/v1/h5dvu1zywij8q");

        if (response.ok) {
            const logs = await response.text()
            console.log(logs)
            this.setState({data:logs});
        } else {
            this.setState({ data: "Failed to fetch data. Check you API" });
        }


    }
    render() {

        return <div>{this.state.data}</div>
    }
}


export default Logs;