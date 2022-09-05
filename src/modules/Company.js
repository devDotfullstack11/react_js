import React from 'react';
import axios from 'axios';
import Header from '../Header';

//function Home() {
export default class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: {}
        }
    }



    getResults(keyword = null) {
        axios.post("http://localhost:3101/products/list", {})
            .then(res => {
                console.log("Response => ", res.data);
                let products = res.data.results;
                this.setState({ products });
            }).catch(error => {
                console.log("error => ", error)
            });

    }



    componentDidMount() {
        this.getResults();
        //this.props.topLevelState.verifyToken("verification");
    }

    render() {
        const TRs = Object.keys(this.state.products).map(key =>
            <tr><td>{this.state.products[key].name}</td><td>{this.state.products[key].cin}</td></tr>
        )
        return (
            <React.Fragment>
                <Header></Header>
                <div className="form-group m-t-40">
                    
                    <div>
                        <div className="col-xs-6 col-md-6 col-xl-6">
                            <table className='table table-responsive table-striped'>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Company Cin</th>
                                </tr>
                                {TRs}
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }

}