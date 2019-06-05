import React, { Component } from "react";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



class DeleteBeer extends Component {
  constructor(props) {
    super(props);
    
  }
  useStyles() {
    return makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  }

  render() {
  
    
      const classes = this.useStyles();
    return (
      <Button onClick={e => this.props.handleDelete(this.props.beerId, e)} variant="contained" color="primary" className={classes.button}>
        Delete
      </Button>
    );
  }
}

export default DeleteBeer;
