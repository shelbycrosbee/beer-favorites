import React, { Component } from "react";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



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
      <IconButton aria-label="Delete" onClick={e => this.props.handleDelete(this.props.beerId, e)} variant="contained" color="primary" className={classes.button}>
        <DeleteIcon />
      </IconButton>
    );
  }
}

export default DeleteBeer;
