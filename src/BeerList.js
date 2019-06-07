import React, { Component } from "react";
import "./App.css";
import UpdateBeer from "./UpdateBeer";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

class BeerList extends Component {
  constructor(props) {
    super(props);
  }

  useStyles() {
    return makeStyles(theme => ({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
    }));
  }

  render() {
    const classes = this.useStyles();
    const beersList = this.props.beers.map(beer => (
      <UpdateBeer
        beer={beer}
        key={beer.id}
        setEdit={this.props.setEdit}
        handleUpdate={this.props.handleUpdate}
        handleDelete={this.props.handleDelete}
      />
    ));
    return (
      <div className={classes.root}>
        <List className="font">{beersList}</List>
        </div>
    );
  }
}
export default BeerList;
