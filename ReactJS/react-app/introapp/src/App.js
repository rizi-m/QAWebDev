import React, { Component } from 'react';
import Header from './header/Header';
import Content from './content/Content'
import getRequest from './utils/http'
import RoyaltySearchInput from './royalty-searcher/RoyaltySearchInput'
import logo from './logo.svg';
import './App.css';
import RoyaltyShower from './royalty-searcher/RoyaltyShower';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleText: "",
      countryText: "",
      houseText: "",
      yearsText: "",
      inputValue: "",
      headerProp: "This is header prop",
      contentProp: "This is content prop"
    };

  }

  updateInputText = (e) => {
     const search = e.target.value;
    getRequest('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json', (data) => {
      const royalty = data.filter(r => r.nm.toLowerCase() == search.toLowerCase())[0];
      if (royalty) {
        this.setState({
          titleText: royalty.nm,
          countryText: royalty.cty,
          houseText: royalty.hse,
          yearsText: royalty.yrs
        });
      } else if (search != "") {
        this.setState({
          titleText: "No Royalty found for: " + search,
          countryText: "",
          houseText: "",
          yearsText: ""
        });
      } else {
        this.setState({
          titleText: "",
          countryText: "",
          houseText: "",
          yearsText: ""
        });
      }
    });
  }

  updateHeader = () => {
      const value = document.getElementById("input-update-header").value;
      this.setState({
          headerProp: value
      });
  }

  updateFooter = () => {
      const value = document.getElementById("input-update-footer").value;
      this.setState({
        contentProp: value
      });
  }

  render() {
    return (
      <div>
        <Header headerProp={this.state.headerProp}/>
        <Content contentProp={this.state.contentProp}/>
        
        <input id="input-update-header" type="text"/>
        <button onClick={this.updateHeader}>Change Header</button>
        <br/>
        <input id="input-update-footer" type="text"/>
        <button onClick={this.updateFooter}>Change Content</button>
        <br/>
        <RoyaltySearchInput onChange={this.updateInputText}/> 
        <RoyaltyShower name={this.state.titleText} 
          country={this.state.countryText} 
          house={this.state.houseText} 
          years={this.state.yearsText} />
      </div>
    )
  }
}

export default App;
