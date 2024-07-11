import React from 'react'

const WeatherDisplay = ({ weatherData }) => {

    const styles = {
        color:weatherData.temperature>20?'red':'blue'
    }

	return (
		<div>
			<p>Temperature: {weatherData.temperature}</p>
			<span style={styles}>
				<p>Conditions: {weatherData.conditions}</p>
			</span>
		</div>
	)
}

export default WeatherDisplay
