import React, { Component } from "react";
import "./App.css";
import CreateBeer from "./CreateBeer";
import BeerList from "./BeerList";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [

      ],
      newBeerCounter: 0,
      newBeerName: ""
    };
  }
  componentDidMount() {
    axios.get("https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers", {
      params: {
        key: '6a77d8ebdb6fc67de2c49dc0f1141b01',
        styleId: 43
      }
    })
      .then(response => {
        console.log(response.data.data);
        let beers = response.data.data.map((beer, i) => {
          return {
            id: i,
            name: `${beer.name} --- ABV: ${beer.abv}`,
            // abv: beer.abv
          }
        })
        this.setState({ beers, newBeerCounter: beers.length })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  setEdit = (e, beerId) => {
    let newBeers = this.state.beers.map(beer => {
      if (beer.id === beerId) {
        return { ...beer, edit: true };
      } else {
        return { ...beer, edit: false };
      }
    });
    this.setState({
      beers: newBeers
    });
  };

  handleDelete = (beerId, e) => {
    e.preventDefault();
    const updatedBeerlist = this.state.beers.filter(beer => beer.id !== beerId);
    this.setState({
      beers: updatedBeerlist
    });
  };

  handleUpdate(beerId, updateBeerName, e) {
    e.preventDefault();
    const updatedBeerlist = this.state.beers.map(beer => {
      if (beer.id === beerId) {
        return { ...beer, name: updateBeerName, edit: false };
      } else {
        return { ...beer, edit: false };
      }
    });
    this.setState({
      beers: updatedBeerlist
    });
  }

  handleSubmit(e, newBeerName) {
    e.preventDefault();
    this.setState({
      beers: [
        ...this.state.beers,
        {
          id: this.state.newBeerCounter,
          name: newBeerName
        }
      ],
      newBeerCounter: this.state.newBeerCounter + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Everyone's Beer Favorites</h1>
        <BeerList
          beers={this.state.beers}
          setEdit={this.setEdit.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          handleUpdate={this.handleUpdate.bind(this)}
        />
        <CreateBeer handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default App;
