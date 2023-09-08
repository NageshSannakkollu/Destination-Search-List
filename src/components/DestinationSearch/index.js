// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class destinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeDestinationSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )
    console.log(searchResults)
    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1>Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-container"
              placeholder="Search"
              onChange={this.onChangeDestinationSearch}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-image"
            />
          </div>
          <ul className="items-list-container">
            {searchResults.map(eachDestination => (
              <DestinationItem
                destinationDetails={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default destinationSearch
