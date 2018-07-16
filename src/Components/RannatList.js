import React , {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Song from './Song';
import app from '../utilities'


class RannatList extends Component {
	state = {
		rannat: [],
		search: ''
	}

	constructor() {
		super()
	}

	updateSearch = (search) => {
      if(search.target.value) {
        this.setState({
          search : search.target.value
        })
      }else {
        this.setState({
          search : ""
        })
      }
        
        this.fetchData();
    }

    fetchData = (search) => {
      app.query = this.state.search;
      app.getRanneh().then((ranneh) => {
      this.setState({
        rannat : ranneh.data
      })
    });
    }

    render() {
    	return (
    		<div>
    			{this.state.rannat ? (
    				<div>
    					<TextField style={{padding: 24}}
    						id="searchInput"
    						placeholder="Your song here..."
    						margin="normal"
    						onChange={this.updateSearch} />

    					<Grid container spacing={24} style={{padding : 24}}>
    						{this.state.rannat.map((ranneh,i) => (
    							<Grid item xs={12} sm={6} lg={4} xl={3}>
    								<Song ranneh={ranneh} />
    							</Grid>
  	  						))}
    					</Grid>
    					
    					 	
    				</div>
    				) : "No songs found" }
    		</div>
    		)
    }
}

export default RannatList;











