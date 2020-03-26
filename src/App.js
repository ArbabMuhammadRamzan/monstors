import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/cardList/card-list.jsx';
import { Search } from './components/search/search.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monstors: [
        {
          name: "Loin",
          email: "loin@gamil.com",
          id: "1"
        },
        {
          name: "Cat",
          email: "cat@gamil.com",
          id: "2"
        }, {
          name: "Loin",
          email: "loin@gamil.com",
          id: "3"
        },
        {
          name: "Loin",
          email: "loin@gamil.com",
          id: "4"
        },
        {
          name: "Loin",
          email: "loin@gamil.com",
          id: "5"
        },
        {
          name: "Loin",
          email: "loin@gamil.com",
          id: "6"
        },
        {
          name: "Loin",
          email: "loin@gamil.com",
          id: "7"
        },
        {
          name: "Loin",
          email: "loin@gamil.com",
          id: "8"
        }

      ],
      searchField: ""
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({ monstors: users }));
  }
  searchFtn = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monstors, searchField } = this.state;
    const filteredValue = monstors.filter(
      monstor => monstor.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="app">
        <h1 className="h1">Monstor App</h1>
        <Search searchFtn={this.searchFtn} />
        <CardList monstors={filteredValue} />
      </div>
    )
  }


}



export default App;