import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    /* 
     * explicitly bind "this" which refers to 
     * this component "BeerUpdate"
     */
    this.updateBeer = this.updateBeer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    // Get beer by Id
    let newDetails =  this.props.beers.find(beer => {
      return beer.id === parseInt(this.props.match.params.id)
    })

    this.setState({
      id: parseInt(this.props.match.params.id),
      name: newDetails.name,
      brewery: newDetails.brewery,
      alcoholContent: newDetails.alcoholContent
    })
  }

  /**
   * Update state every key stroke in input fields
   * https://reactjs.org/docs/forms.html#controlled-components
   */
  handleInputChange(e) {
    /* 
     * [e,target.name] can get value of the "name" attribute of
     * the input field which is currenlty typed in
     */ 
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  /* Gets called when user clicks "Update Beer" button
   * via JS native onSubmit form event handler
   */
  updateBeer(e) {
    e.preventDefault(); // prevent browser-standard of reloading page on form submit

    this.props.updateBeer(parseInt(this.props.match.params.id), this.state)
    this.props.history.push('/beers/' + this.props.match.params.id); // redirect to beer detail page after update

  }

  /**
   * see https://reactjs.org/docs/forms.html#controlled-components for onChange
   */
  render() {
    return (
      <div>
        <h3>Update Beer</h3>
        <form onSubmit={ this.updateBeer }>
          <label>
            Name:
            <input value={ this.state.name } name="name" type="text" onChange={ this.handleInputChange }/>
          </label><br />
          <label>
            Brewery:
            <input value={ this.state.brewery } name="brewery" type="text" onChange={ this.handleInputChange }/>
          </label><br/>
          <label>
            Alcohol Content:
            <input value={ this.state.alcoholContent } name="alcoholContent" type="number" onChange={ this.handleInputChange }/>
          </label><br/>
          <button>Update Beer</button>
        </form>
        <Link to={ '/beers/' + this.props.match.params.id }> <button>Back</button></Link> {/* Adds link back to beer details */}
      </div>
    );
  }
}

export default BeerUpdate;