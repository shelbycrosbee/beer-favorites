import React, { Component } from "react";
import "./App.css";
import DeleteBeer from "./DeleteBeer";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

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

  render() {

    return (
      <div>
        <Divider />
        <ListItem button>

          <span onClick={e => this.props.setEdit(e, this.props.beer.id)}>
            {this.props.beer.edit ? (
              <input
                type="text"
                name="editBeerName"
                value={this.state.updatedBeerName}
                // placeholder={this.props.beer.name}
                onChange={e => this.handleChange(e)}
              />
            ) : (
                this.props.beer.name
              )}
          </span>
          {this.props.beer.edit ? (
            <a
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
          </a>
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
