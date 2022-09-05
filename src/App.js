import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter,Router, Route, Routes , Switch,useNavigate} from 'react-router-dom';
import  Home  from './modules/Home';
import Company from './modules/Company';

export default function(props) {
  const navigate = useNavigate();

  return <App {...props} navigate={navigate} />;
}

class App extends React.Component {
  //function App() {
    constructor(props) {
      super(props);
    
    }
  
   
  
    render(){
      const { navigate } = this.props;
     
      return (
        
              <Routes>
                <Route exact path="/" element={<Home   navigate= {navigate} />}/>
                <Route exact path="/companies" element={<Company navigate= {navigate} />}/>
              </Routes>
        
      );
    }
  }

//export default App;
