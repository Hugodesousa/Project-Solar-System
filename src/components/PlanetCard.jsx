import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="planet" />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default PlanetCard;
