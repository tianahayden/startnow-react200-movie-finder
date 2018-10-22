import React from 'react';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Movie Detail Container</h1>

        <p>Viewing movie {this.props.match.params.id}</p>
      </div>
    )
  }
}

export default MovieDetails;