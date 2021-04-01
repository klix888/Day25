import React from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { totalReactPackage: null }
    }
    componentDidMount() {
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackage: data.total }));
    }
    render() {
        const { totalReactPackage } = this.state;
        return(
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">Total packages: {totalReactPackage}</div>
            </div>
        );
    }
}

export default GetRequest;