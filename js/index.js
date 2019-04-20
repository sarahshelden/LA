// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data

chart.data = [
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 03:00",
   "Actual": 50.21,
   "Forecast": 49.69,
   "Difference": 0.52
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 04:00",
   "Actual": 49.4,
   "Forecast": 49.04,
   "Difference": 0.36
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 05:00",
   "Actual": 48.96,
   "Forecast": 48.43,
   "Difference": 0.53
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 06:00",
   "Actual": 48.5,
   "Forecast": 48.03,
   "Difference": 0.47
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 07:00",
   "Actual": 47.96,
   "Forecast": 47.58,
   "Difference": 0.38
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 08:00",
   "Actual": 47.87,
   "Forecast": 46.99,
   "Difference": 0.88
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 09:00",
   "Actual": 47.56,
   "Forecast": 46.43,
   "Difference": 1.13
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 10:00",
   "Actual": 46.93,
   "Forecast": 45.85,
   "Difference": 1.08
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 11:00",
   "Actual": 46.73,
   "Forecast": 45.44,
   "Difference": 1.29
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 12:00",
   "Actual": 46.33,
   "Forecast": 45.24,
   "Difference": 1.09
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 13:00",
   "Actual": 45.85,
   "Forecast": 45.18,
   "Difference": 0.67
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 14:00",
   "Actual": 45.62,
   "Forecast": 45.19,
   "Difference": 0.43
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 15:00",
   "Actual": 46.2,
   "Forecast": 45.51,
   "Difference": 0.69
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 16:00",
   "Actual": 46.7,
   "Forecast": 46.28,
   "Difference": 0.42
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 17:00",
   "Actual": 47.23,
   "Forecast": 47.31,
   "Difference": -0.08
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 18:00",
   "Actual": 48.63,
   "Forecast": 48.86,
   "Difference": -0.23
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 19:00",
   "Actual": 49.63,
   "Forecast": 50.41,
   "Difference": -0.78
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 20:00",
   "Actual": 50.5,
   "Forecast": 52.24,
   "Difference": -1.74
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 21:00",
   "Actual": 51.79,
   "Forecast": 53.44,
   "Difference": -1.65
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 22:00",
   "Actual": 52.3,
   "Forecast": 53.97,
   "Difference": -1.67
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/11 23:00",
   "Actual": 53.22,
   "Forecast": 53.63,
   "Difference": -0.41
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 00:00",
   "Actual": 53.33,
   "Forecast": 52.95,
   "Difference": 0.38
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 01:00",
   "Actual": 53.07,
   "Forecast": 51.75,
   "Difference": 1.32
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 02:00",
   "Actual": 52.7,
   "Forecast": 50.81,
   "Difference": 1.89
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 03:00",
   "Actual": 52.58,
   "Forecast": 52.57,
   "Difference": 0.01
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 04:00",
   "Actual": 52.19,
   "Forecast": 51.84,
   "Difference": 0.35
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 05:00",
   "Actual": 51.6,
   "Forecast": 50.4,
   "Difference": 1.2
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 06:00",
   "Actual": 51.18,
   "Forecast": 49.25,
   "Difference": 1.93
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 07:00",
   "Actual": 49.93,
   "Forecast": 48.79,
   "Difference": 1.14
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 08:00",
   "Actual": 49.48,
   "Forecast": 48.37,
   "Difference": 1.11
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 09:00",
   "Actual": 48.96,
   "Forecast": 47.94,
   "Difference": 1.02
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 10:00",
   "Actual": 48.64,
   "Forecast": 47.54,
   "Difference": 1.1
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 11:00",
   "Actual": 48.17,
   "Forecast": 47.25,
   "Difference": 0.92
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 12:00",
   "Actual": 47.57,
   "Forecast": 47.08,
   "Difference": 0.49
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 13:00",
   "Actual": 47.22,
   "Forecast": 46.97,
   "Difference": 0.25
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 14:00",
   "Actual": 46.98,
   "Forecast": 46.9,
   "Difference": 0.08
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 15:00",
   "Actual": 47.25,
   "Forecast": 47.29,
   "Difference": -0.04
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 16:00",
   "Actual": 47.43,
   "Forecast": 48.54,
   "Difference": -1.11
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 17:00",
   "Actual": 48.25,
   "Forecast": 50.12,
   "Difference": -1.87
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 18:00",
   "Actual": 49.62,
   "Forecast": 52.29,
   "Difference": -2.67
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 19:00",
   "Actual": 51.13,
   "Forecast": 53.98,
   "Difference": -2.85
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 20:00",
   "Actual": 53.08,
   "Forecast": 55.34,
   "Difference": -2.26
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 21:00",
   "Actual": 54.59,
   "Forecast": 56.41,
   "Difference": -1.82
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 22:00",
   "Actual": 55.3,
   "Forecast": 57.64,
   "Difference": -2.34
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/12 23:00",
   "Actual": 56.44,
   "Forecast": 58.75,
   "Difference": -2.31
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 00:00",
   "Actual": 57.28,
   "Forecast": 59.24,
   "Difference": -1.96
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 01:00",
   "Actual": 56.78,
   "Forecast": 58.53,
   "Difference": -1.75
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 02:00",
   "Actual": 55.88,
   "Forecast": 56.82,
   "Difference": -0.94
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 03:00",
   "Actual": 54.72,
   "Forecast": 54.88,
   "Difference": -0.16
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 04:00",
   "Actual": 53.16,
   "Forecast": 53.45,
   "Difference": -0.29
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 05:00",
   "Actual": 52.4,
   "Forecast": 52.05,
   "Difference": 0.35
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 06:00",
   "Actual": 51.65,
   "Forecast": 50.7,
   "Difference": 0.95
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 07:00",
   "Actual": 50.66,
   "Forecast": 49.57,
   "Difference": 1.09
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 08:00",
   "Actual": 49.63,
   "Forecast": 48.48,
   "Difference": 1.15
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 09:00",
   "Actual": 49.28,
   "Forecast": 47.74,
   "Difference": 1.54
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 10:00",
   "Actual": 48.87,
   "Forecast": 47.22,
   "Difference": 1.65
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 11:00",
   "Actual": 48.56,
   "Forecast": 46.98,
   "Difference": 1.58
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 12:00",
   "Actual": 48.12,
   "Forecast": 46.5,
   "Difference": 1.62
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 13:00",
   "Actual": 47.82,
   "Forecast": 45.79,
   "Difference": 2.03
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 14:00",
   "Actual": 46.31,
   "Forecast": 45.33,
   "Difference": 0.98
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 15:00",
   "Actual": 45.83,
   "Forecast": 45.38,
   "Difference": 0.45
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 16:00",
   "Actual": 45.08,
   "Forecast": 45.77,
   "Difference": -0.69
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 17:00",
   "Actual": 45.32,
   "Forecast": 46.39,
   "Difference": -1.07
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 18:00",
   "Actual": 45.48,
   "Forecast": 47.01,
   "Difference": -1.53
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 19:00",
   "Actual": 45.51,
   "Forecast": 47.31,
   "Difference": -1.8
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 20:00",
   "Actual": 46.55,
   "Forecast": 48.19,
   "Difference": -1.64
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 21:00",
   "Actual": 48.79,
   "Forecast": 49.26,
   "Difference": -0.47
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 22:00",
   "Actual": 49.57,
   "Forecast": 50.68,
   "Difference": -1.11
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/13 23:00",
   "Actual": 50,
   "Forecast": 51.73,
   "Difference": -1.73
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 00:00",
   "Actual": 50.64,
   "Forecast": 52.47,
   "Difference": -1.83
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 01:00",
   "Actual": 50.82,
   "Forecast": 52.19,
   "Difference": -1.37
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 02:00",
   "Actual": 50.97,
   "Forecast": 51.12,
   "Difference": -0.15
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 03:00",
   "Actual": 49.43,
   "Forecast": 49.72,
   "Difference": -0.29
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 04:00",
   "Actual": 48.21,
   "Forecast": 47.63,
   "Difference": 0.58
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 05:00",
   "Actual": 47.42,
   "Forecast": 46.02,
   "Difference": 1.4
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 06:00",
   "Actual": 46.82,
   "Forecast": 44.78,
   "Difference": 2.04
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 07:00",
   "Actual": 43.5,
   "Forecast": 43.39,
   "Difference": 0.11
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 08:00",
   "Actual": 43.42,
   "Forecast": 42.69,
   "Difference": 0.73
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 09:00",
   "Actual": 43.16,
   "Forecast": 42.08,
   "Difference": 1.08
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 10:00",
   "Actual": 42.53,
   "Forecast": 41.59,
   "Difference": 0.94
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 11:00",
   "Actual": 41.9,
   "Forecast": 41.27,
   "Difference": 0.63
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 12:00",
   "Actual": 42.05,
   "Forecast": 40.87,
   "Difference": 1.18
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 13:00",
   "Actual": 42.28,
   "Forecast": 40.89,
   "Difference": 1.39
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 14:00",
   "Actual": 42.53,
   "Forecast": 41.64,
   "Difference": 0.89
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 15:00",
   "Actual": 43.86,
   "Forecast": 42.98,
   "Difference": 0.88
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 16:00",
   "Actual": 46.66,
   "Forecast": 45.18,
   "Difference": 1.48
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 17:00",
   "Actual": 48.18,
   "Forecast": 47.91,
   "Difference": 0.27
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 18:00",
   "Actual": 50.16,
   "Forecast": 50.32,
   "Difference": -0.16
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 19:00",
   "Actual": 51.92,
   "Forecast": 52.93,
   "Difference": -1.01
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 20:00",
   "Actual": 53.65,
   "Forecast": 55.22,
   "Difference": -1.57
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 21:00",
   "Actual": 54.99,
   "Forecast": 57.43,
   "Difference": -2.44
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 22:00",
   "Actual": 55.95,
   "Forecast": 59.24,
   "Difference": -3.29
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/14 23:00",
   "Actual": 56.92,
   "Forecast": 60.61,
   "Difference": -3.69
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 00:00",
   "Actual": 56.51,
   "Forecast": 60.57,
   "Difference": -4.06
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 01:00",
   "Actual": 55.6,
   "Forecast": 59.14,
   "Difference": -3.54
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 02:00",
   "Actual": 54.72,
   "Forecast": 56.47,
   "Difference": -1.75
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 03:00",
   "Actual": 53.14,
   "Forecast": 54.2,
   "Difference": -1.06
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 04:00",
   "Actual": 51.72,
   "Forecast": 52.27,
   "Difference": -0.55
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 05:00",
   "Actual": 50.6,
   "Forecast": 50.79,
   "Difference": -0.19
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 06:00",
   "Actual": 49.91,
   "Forecast": 49.8,
   "Difference": 0.11
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 07:00",
   "Actual": 48.57,
   "Forecast": 48.83,
   "Difference": -0.26
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 08:00",
   "Actual": 47.48,
   "Forecast": 48.05,
   "Difference": -0.57
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 09:00",
   "Actual": 46.17,
   "Forecast": 47.2,
   "Difference": -1.03
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 10:00",
   "Actual": 45.88,
   "Forecast": 46.11,
   "Difference": -0.23
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 11:00",
   "Actual": 45.7,
   "Forecast": 45.01,
   "Difference": 0.69
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 12:00",
   "Actual": 45.11,
   "Forecast": 44.29,
   "Difference": 0.82
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 13:00",
   "Actual": 44.43,
   "Forecast": 44.62,
   "Difference": -0.19
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 14:00",
   "Actual": 44.5,
   "Forecast": 45.4,
   "Difference": -0.9
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 15:00",
   "Actual": 46.71,
   "Forecast": 46.89,
   "Difference": -0.18
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 16:00",
   "Actual": 48.75,
   "Forecast": 49.17,
   "Difference": -0.42
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 17:00",
   "Actual": 50.39,
   "Forecast": 51.97,
   "Difference": -1.58
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 18:00",
   "Actual": 52.71,
   "Forecast": 54.7,
   "Difference": -1.99
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 19:00",
   "Actual": 53.62,
   "Forecast": 56.68,
   "Difference": -3.06
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 20:00",
   "Actual": 55.09,
   "Forecast": 58.49,
   "Difference": -3.4
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 21:00",
   "Actual": 56.44,
   "Forecast": 59.59,
   "Difference": -3.15
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 22:00",
   "Actual": 58.14,
   "Forecast": 60.63,
   "Difference": -2.49
 },
 {
   "City": "Los Angeles",
   "Date": "2019/04/15 23:00",
   "Actual": 56.7,
   "Forecast": 61.19,
   "Difference": -4.49
 }];
 
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";


var legend = new am4charts.Legend();
legend.isMeasured = true;
legend.y = am4core.percent(100);
legend.verticalCenter = "bottom";
legend.parent = chart.chartContainer;
legend.data = [{
"name": "Difference of Actual Weather",
"fill": chart.colors.getIndex(0)
}];                          

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.startLocation = 0.5;
dateAxis.endLocation = 0.5;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "Difference";
series.dataFields.dateX = "Date";
series.strokeWidth = 3;
series.tooltipText = "{valueY.value}";
series.fillOpacity = 0.1;

// Create a range to change stroke for values below 0
var range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = -1000;
range.contents.stroke = chart.colors.getIndex(4);
range.contents.fill = range.contents.stroke;
range.contents.strokeOpacity = 0.7;
range.contents.fillOpacity = 0.1;

// Add cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = dateAxis;
chart.scrollbarX = new am4core.Scrollbar();