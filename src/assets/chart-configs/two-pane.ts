export const twoPaneConfig = {
	rangeSelector: {
		selected: 1
	},
	plotOptions: {
		candlestick: {
			color: '#28a745',
			upColor: '#dc3545'
		}
	},
	title: {
		text: 'AAPL Historical'
	},
	yAxis: [{
		labels: {
			align: 'right',
			x: -3
		},
		title: {
			text: 'OHLC'
		},
		height: '60%',
		lineWidth: 2,
		resize: {
			enabled: true
		}
	}, {
		labels: {
			align: 'right',
			x: -3
		},
		title: {
			text: 'Volume'
		},
		top: '65%',
		height: '35%',
		offset: 0,
		lineWidth: 2
	}],
	tooltip: {
		split: true
	},
	annotations: [{
		labels: [{
			point: 'max',
			text: 'Max',
		}, {
			point: 'min',
			text: 'Min',
			backgroundColor: 'white'
		}]
	}],
	series: [{
		type: 'candlestick',
		name: 'AAPL',
		data: [],
		dataGrouping: {
			units: []
		}
	}, {
		type: 'spline',
		name: 'Volume',
		data: [],
		yAxis: 1,
		dataGrouping: {
			units: []
		}
	}]
};