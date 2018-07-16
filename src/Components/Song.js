import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Song = (props) => {
	return (
		<div>
			{props.ranneh ? (
				<Card>
					<CardMedia style={{height : 0, paddingTop : '56.25%'}} 
						image={'https://static1.squarespace.com/static/58eac4d88419c2d993e74f57/58ed681b29687f7f1229cc79/58ed6cf0be6594791fe54d98/1502659740701/ITunes_12_logo.png'}
					/>
					<CardContent>
						<Typography gutterBottom variant="headline" component="h2">
							{props.ranneh.author.name}-{props.ranneh.author.name_arabic}
						</Typography>
						<Typography component="p">
							{props.ranneh.name_arabic} - {props.ranneh.name}
						</Typography>
					</CardContent>	
				</Card>
				) : null
		}
		</div>
		)
}

export default Song;