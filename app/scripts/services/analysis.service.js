myApp.service('AnalysisService', function() {

	this.result = {};

	var lastWeekSalesByModelBar = {

		title: {
			text: 'Sales by Model'
		},
		xAxis: {
			categories: ['Audi A8', 'Audi A6', 'Audi A4', 'Audi A10', 'Audi Basic']
		},
		yAxis: {
			min: 0,
			title: {
				text: ''
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
				}
			}
		},
		options: {
			chart: {
				type: 'column'
			},
			legend: {
				align: 'right',
				x: -70,
				verticalAlign: 'top',
				y: 20,
				floating: true,
				backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
				borderColor: '#CCC',
				borderWidth: 1,
				shadow: false
			},
			tooltip: {
				valueSuffix: ' millions'
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				}
			},
			plotOptions: {
				column: {
					stacking: 'normal',
					dataLabels: {
						enabled: true,
						color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
						style: {
							textShadow: '0 0 3px black, 0 0 3px black'
						}
					}
				}
			}
		},
		series: [{
			name: 'Dec 20- Dec 27',
			data: [3, 4, 4, 2, 5]
		}]
	};

	var lastWeekSalesByModelPie = {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false
		},
		title: {
			text: 'Sales Share by Model',
			align: 'center',
			y: 40
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white'
					}
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%']
			}
		},
		series: [{
			type: 'pie',
			name: 'Percentage Sales',
			innerSize: '50%',
			data: [
				['Audi A8', 10.38],
				['Audi A6', 56.33],
				['Audi Basic', 24.03],
				['Audi A4', 4.77],
				['Audi A10', 0.91], {
					name: 'Proprietary or Undetectable',
					y: 0.2,
					dataLabels: {
						enabled: false
					}
				}
			]
		}]
	}

	var lastWeekProfitsByModelBar = {

		title: {
			text: 'Profits by Model'
		},
		xAxis: {
			categories: ['Audi A8', 'Audi A6', 'Audi A4', 'Audi A10', 'Audi Basic']
		},
		yAxis: {
			min: 0,
			title: {
				text: ''
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
				}
			}
		},
		options: {
			chart: {
				type: 'column'
			},
			legend: {
				align: 'right',
				x: -70,
				verticalAlign: 'top',
				y: 20,
				floating: true,
				backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
				borderColor: '#CCC',
				borderWidth: 1,
				shadow: false
			},
			tooltip: {
				valueSuffix: ' millions'
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				}
			},
			plotOptions: {
				column: {
					stacking: 'normal'
					// dataLabels: {
					// 	enabled: true,
					// 	// color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
					// 	style: {
					// 		textShadow: '0 0 3px black, 0 0 3px black'
					// 	}
					// }
				}
			}
		},
		series: [{
			name: 'Dec 20- Dec 27',
			data: [1, 0, 2, 1, 3]
		}]
	};

	this.result.salesByModelBar = lastWeekSalesByModelBar;
	this.result.salesByModelPie = lastWeekSalesByModelPie;
	this.result.profitsByModelBar = lastWeekProfitsByModelBar;

	return this.result;

});