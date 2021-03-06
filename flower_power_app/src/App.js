import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import Form from './components/form/form';
import './App.css';

const data = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick= this.handleClick.bind(this);
    this.handleChangeTitle= this.handleChangeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.state = {
      name: 'Andrei',
      allData: data,
      title: 'Super Andrei'
    }
  }
  handleClick(name){
    alert(name);
  }
  handleChangeTitle(event){
    this.setState({title: event.target.value})
  }
 // handler for submitting the form 
  handleSubmit(event){
    event.preventDefault();
  }
  //handler for change location
  handleChangeLocation(event){
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <Content name =  {this.state.name} 
        handleClick={this.handleClick} 
        allData={this.state.allData} 
        title={this.state.title}
        handleChangeTitle={this.handleChangeTitle}
        />
        <Form />
      </div>
    );
  }
}

export default App;
