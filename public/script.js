var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Project 1','Project 2'];
var test = 0.80
//Data
var d = [
		  [
			{axis:"Cost Efficiency",value: test},
			{axis:"Institutional Capacity",value:0.56},
			{axis:"Exposure Reduction",value:0.42},
			{axis:"Social Benefits",value:0.34},
			{axis:"Participatory Process",value:0.48},
			{axis:"GHG Reduction",value:0.14},
			{axis:"Adaptation Over Time",value:0.11},
			{axis:"Ecological Ehancement",value:0.05}
		  ],[
			{axis:"Cost Efficiency",value:0.70},
			{axis:"Institutional Capacity",value:0.80},
			{axis:"Exposure Reduction",value:0.20},
			{axis:"Social Benefits",value:0.30},
			{axis:"Participatory Process",value:0.04},
			{axis:"GHG Reduction",value:0.50},
			{axis:"Adaptation Over Time",value:0.60},
			{axis:"Ecological Ehancement",value:0.75}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Cost/Benefit Analysis of Project 1 and Project 2");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	