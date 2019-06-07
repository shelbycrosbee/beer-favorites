import React, { Component } from "react";
import "./App.css";
import DeleteBeer from "./DeleteBeer";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class UpdateBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedBeerName: ""
    };
  }

  handleChange(e) {
    this.setState({
      updatedBeerName: e.target.value
    });
  }

  componentDidMount() {
    this.setState({
      updatedBeerName: this.props.beer.name
    })
  }
  useStyles() {
    return makeStyles(theme => ({
      container: {
        // display: 'flex',
        // flexWrap: 'wrap',
        width: "100%"
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      dense: {
        marginTop: theme.spacing(2),
      },
      menu: {
        width: 200,
      },
    }));
  }
  render() {
    const classes = this.useStyles();

    return (
      <div>
        <Divider/>
        <ListItem button>

          <span onClick={e => this.props.setEdit(e, this.props.beer.id)}>
            {this.props.beer.edit ? (
              <form className={classes.container} noValidate autoComplete="off" className = "font">
                <TextField
                  id="outlined-name"
                  label="Update"
                  className={classes.textField}
                  value={this.state.updatedBeerName}
                  onChange={e => this.handleChange(e)}
                  margin="normal"
                  variant="outlined"
                />
              </form>

            ) : (
                this.props.beer.name
              )}
          </span>
          {this.props.beer.edit ? (
            <Button
              href="/"
              onClick={e =>
                this.props.handleUpdate(
                  this.props.beer.id,
                  this.state.updatedBeerName,
                  e
                )
              }
            >
              Update
          </Button>
          ) : (

               <DeleteBeer
                beerId={this.props.beer.id}
                handleDelete={this.props.handleDelete}
              />
            )}

        </ListItem>
      </div>
    );
  }
}

export default UpdateBeer;
