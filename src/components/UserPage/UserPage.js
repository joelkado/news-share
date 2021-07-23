import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_STORY' });
  }

  render() {
    const stories = this.props.store.story
    return (
      <div>
        REDUX STATE: {JSON.stringify(stories)}

        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" />

         {/* {stories.map((story) => ( */}

<table border="1">
  <thead>
    <tr>
<td>headline</td>
<td>Author</td>
<td>politican's title</td>
<td>politican first name</td>
<td>politican last name</td>
<td>Job Title</td>
<td>state</td>
<td>party</td>
<td>twitter</td>
<td>facebook</td>
<td>instagram</td>
<td>image URL</td>
<td>body</td>
<td>additional information</td>

      </tr>


</thead>

</table>

         {/* ))}  */}




      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
