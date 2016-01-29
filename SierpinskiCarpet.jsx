SierpinskiCarpet = React.createClass({

    drawSCarpet: function() {
	var width = 600;
	var height = 600;
	var maxRecursions = 6;
	var interval = 1000;

	//drawCarpet(0,[width/2, height/2], width/3);
	drawCarpet(0,[width/2, height/2], width/3, 0);
		 
	function getRandomArbitrary(min, max) {
	    return Math.random() * (max - min) + min;
	}

	function getRandomColour() {
	    return "rgb(" + Math.round(getRandomArbitrary(0,255)) +
		"," + Math.round(getRandomArbitrary(0,255)) +
		"," + Math.round(getRandomArbitrary(0,255)) + ")";
	}

	function drawSquare(center,length) {
	    d3.select("#scarpet")
 	        .append("rect")
		.attr("x", center[0] - (length/2))
		.attr("y", center[1] - (length/2))
		.attr("width", length)
		.attr("height", length)
		.style("fill", getRandomColour());
	}

	function drawCarpet(n, center, length, i) {
	    var cx = center[0];
	    var cy = center[1];
	    //draw starting square
	    drawSquare([cx,cy], length );

	   // window.setTimeout( function() {
	    if(n < maxRecursions) {

		
		window.setTimeout( function () { drawCarpet(n + 1,[cx + length,cy], length/3, i + 1)}, 200 + (i * 1600));
		window.setTimeout( function () { drawCarpet(n + 1,[cx - length,cy], length/3, i + 1)}, 400 + (i * 1600) );
		window.setTimeout( function () { drawCarpet(n + 1,[cx, cy + length], length/3, i + 1)}, 600 + (i * 1600));
		window.setTimeout( function () { drawCarpet(n + 1,[cx, cy - length], length/3, i + 1)}, 800 + (i * 1600));
		window.setTimeout( function () { drawCarpet(n + 1,[cx - length, cy + length], length/3, i + 1)}, 1000 + (i * 1600));
		window.setTimeout( function () { drawCarpet(n + 1,[cx + length, cy + length], length/3, i + 1)}, 1200 + (i * 1600));
		window.setTimeout( function () { drawCarpet(n + 1,[cx + length, cy - length], length/3, i + 1)}, 1400 + (i * 1600));
		window.setTimeout( function () { drawCarpet(n + 1,[cx - length, cy - length], length/3, i + 1)}, 1600 + (i * 1600));
	    }

	}
		

	

	

	
	

    },
    
    componentDidMount: function() {
	this.drawSCarpet();
    },

    svgStyle: {
	margin: 'auto',
	display: 'block'
    },
    
    render: function() {

	return(
	    <div textAlign = "center" >
	      <svg id="scarpet" width="600" height="600" style = {this.svgStyle}>
	      </svg>
	    </div>
	);

    }

});
