import React from 'react';
import axios from 'axios';
import Header from '../Header';

//function Home() {
export default class Home extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      products: {},
      formData:{
        keyword:''
      },
      typing: false,
      typingTimeout: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveCompany = this.saveCompany.bind(this);
  }

  handleChange(inputName,event) {  
    const { formData } = this.state;
    formData[inputName] = event.target.value;
    this.setState({
      formData,
    });
    const self = this;

    if (self.state.typingTimeout) {
       clearTimeout(self.state.typingTimeout);
    }

    self.setState({
       keyword: event.target.value,
       typing: false,
       typingTimeout: setTimeout(function () {
           self.getResults(self.state.keyword);
         }, 2000)
    });
  // console.log("state.foradafat",this.state.formData);
  }

  getResults(keyword){
    //console.log("searched Keyword Is :",keyword);
    axios.post("http://localhost:3101/products",{keyword: keyword,filter:'company'})
      .then(res => {
        console.log("Response => ",res);
        let products = res.data;
        this.setState({ products });
      }).catch(error=>{
        console.log("error => ",error)
      });

  }

  saveCompany(company){
    axios.post("http://localhost:3101/products/add",company)
      .then(res => {
        console.log("Response => ",res);
        let response = res.data;
        if(response.status == 1){
          this.props.navigate('/companies');
        } else {
          console.log("Some Error!");
        }
      }).catch(error=>{
        console.log("error => ",error)
      });
  }

  componentDidMount(){
    //this.props.topLevelState.verifyToken("verification");
  }

  render(){
    const tifOptions = Object.keys(this.state.products).map(key => 
      <tr><td>{this.state.products[key].company_name}</td><td>{this.state.products[key].cin}</td><td><button className='button btn-primary'  onClick={() => {this.saveCompany(this.state.products[key])} }  > Add Company</button></td></tr>
  )
    return (
        <React.Fragment> 
          <Header></Header>
            <h1>Seach and Select Company</h1>
            <div className="form-group m-t-40">
              <div className="col-xs-6 col-md-6 col-xl-6">
                <input className="form-control" type="text" required placeholder="Search Keyword" value={this.state.formData.email} onChange={(e) => this.handleChange("keyword", e)} />
              </div>
              <div>
              <div className="col-xs-6 col-md-6 col-xl-6">
                  <table className='table table-responsive'>
                    <tr>
                      <th>Company Name</th>
                      <th>Company Cin</th>
                      <th>Action</th>
                    </tr>
                    {tifOptions}
                  </table>
              </div>
              </div>
            </div>
        </React.Fragment>    

    )
  }

}