// Include React 
var React = require('react');

// This is the main component. It includes the banner and Results element.
var Results = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body text-center">

						<h1>Address:</h1>
						<p>{this.props.address}</p>

				</div>
			</div>

		)
	}
});

// Export the componen back for use in other files
module.exports = Results;