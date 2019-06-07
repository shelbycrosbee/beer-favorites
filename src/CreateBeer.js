import React, { Component } from "react";
import "./App.css";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


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

  handleReset(e, beerName) {
    this.setState({
      newBeerName: ""
    })
    this.props.handleSubmit(e, beerName)
  }

  render() {
    
    return (
      <div>
        <form
          onSubmit={e => this.handleReset(e, this.state.newBeerName)}
        >
          <TextField
            id="outlined-name"
            label="New Beer"
            value={this.state.newBeerName}
            onChange={e => this.handleChange(e)}
            margin="normal"
            variant="outlined"
          />

          <Fab size="medium"
            color="secondary" aria-label="Add" 
            type="submit" style={{margin: '1.4em .2em'}}>
            <AddIcon />
          </Fab>

        </form>
      </div>
    );
  }
}

export default CreateBeer;
