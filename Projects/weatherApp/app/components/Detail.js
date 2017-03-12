var React = require('react');
var utils = require('../helpers/utils');
var DayItem = require('./DayItem');
var convertTemp = utils.convertTemp;

var styles = {
    descriptionContainer: {
        fontSize: 34,
        fontWeight: 100,
        maxWidth: 400,
        margin: '0 auto',
        textAlign: 'center',
    }
}

function Detail (props) {
    return (
        <div style={styles.container}>
            <DayItem day={props.weather}/>
            <div style={styles.descriptionContainer}>
                <p>{props.city}</p>
                <p>{props.weather.weather[0].description}</p>
                <p>Min temp: {convertTemp(props.weather.temp.min)} degrees</p>
                <p>Max temp: {convertTemp(props.weather.temp.max)} degrees</p>
                <p>Humidity: {props.weather.humidity}</p>
            </div>
        </div>
    )
}

module.exports = Detail;