import React, { Component } from "react";
import "./App.css";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
// import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class CreateBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBeerName: ""
    };
  }

  handleChange(e) {
    this.setState({
      newBeerName: e.target.value
    });
  }

  useStyles() {
    return makeStyles(theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      dense: {
        marginTop: 19,
      },
      menu: {
        width: 200,
      },
      margin: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
    }));
  }

  handleReset(e, beerName) {
    this.setState({
      newBeerName: ""
    })
    this.props.handleSubmit(e, beerName)
  }

  render() {
    const classes = this.useStyles();
    return (
      <div>
        <form
          onSubmit={e => this.handleReset(e, this.state.newBeerName)}
        >
          <TextField
            id="outlined-name"
            label="New Beer"
            className={classes.textField}
            value={this.state.newBeerName}
            onChange={e => this.handleChange(e)}
            margin="normal"
            variant="outlined"
          />

          <Fab size="medium"
            color="secondary" aria-label="Add" className={classes.margin} type="submit" style={{ marginTop: '1.4em', marginLeft: '.6em' }}>
            <AddIcon />
          </Fab>

        </form>
      </div>
    );
  }
}

export default CreateBeer;
