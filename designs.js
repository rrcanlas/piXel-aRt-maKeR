//   By Rose Renie - 04/04/2018
//       U D A C I T Y  2018
//   Pixel Art Maker -  Exercise 3




// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()


//event listener that shows the number on the label for height & width

const sliderHeight = document.getElementById('input-height');
const output1 = document.getElementById('height-color');
output1.innerHTML = sliderHeight.value;


sliderHeight.oninput = function() {	
  output1.innerHTML = this.value;
}


const sliderWidth = document.getElementById('input-width');
const output2 = document.getElementById('width-color');
output2.innerHTML = sliderWidth.value;


sliderWidth.oninput = function() {	
  output2.innerHTML = this.value;
}

// event listener for the submit button

$('#grid-value').click(function() {
	const heightValue = $('#input-height').val();
	const widthValue = $('#input-width').val();

	if(heightValue==0 || heightValue> 20) {
		console.log(heightValue);
		alert('Enter a valid number for the row!');
	}else	{
		if(widthValue==0 || widthValue>20) {
			console.log(widthValue);
			alert('Enter a valid number for the column!');
		}else  {							
        	$(".create").show();
        	$("h3").hide();
        	$("h4").hide();
        	var designCanvas = document.querySelector('.create'); 
        	designCanvas.style.cssText += 'position: fixed; border-radius: 0; border: 0; padding: 0; box-shadow: 0px 0px 0px 0px rgba(222,222,222,1); ';
        	if(heightValue<=5) {         		      		
        			designCanvas.style.cssText += 'top: 310px; left: 820px; font-size: 25px;';
				} else if ((heightValue == 10) || (heightValue <= 10)) {
					designCanvas.style.cssText += 'top: 410px; left: 820px; font-size: 25px;';
				} else if ((heightValue == 15) || (heightValue <= 15)) {
					designCanvas.style.cssText += 'top: 510px; left: 820px; font-size: 25px;';
				} else if ((heightValue == 18) || (heightValue <= 18)) {
					designCanvas.style.cssText += 'top: 580px; left: 820px; font-size: 25px;';
				} else {
					designCanvas.style.cssText += 'top: 605px; left: 820px; font-size: 25px; ';
				}				
				makeGrid(heightValue, widthValue);
				// alert('Row is ' + heightValue + ' and '+ ' Column is '+ widthValue);
			} 
		}	
})


//event listener for the reset button

$('#grid-reset').click(function() {
	$('#input-height').val(0);
	$('#input-width').val(0);

	const sliderHeight = document.getElementById('input-height');
	const output1 = document.getElementById('height-color');
	output1.innerHTML = sliderHeight.value;	
	
	sliderHeight.oninput = function() {		
		output1.innerHTML = this.value;	   	   
	}

	const sliderWidth = document.getElementById('input-width');
	const output2 = document.getElementById('width-color');
	output2.innerHTML = sliderWidth.value;	
	
	sliderWidth.oninput = function() {		
	  	output2.innerHTML = this.value;
	}
	$('tr').remove();

	var designCanvasReset = document.querySelector('.create');
	designCanvasReset.style.cssText += 'position: fixed; top: 510px; left: 820px;'; 
	$(".create").show();
	$("h3").show();
	$("h4").show();
	var borderHeight = document.querySelector('.border1');
	borderHeight.style.cssText += 'height: 170px';
});


// event listener for creating the grid

function makeGrid(r,c) {
	$('tr').remove();
	let row = 1;
	while (row <= r) {
		$('table').append('<tr></tr>')
	    row++;
	    for (var col = 1; col <= c; col++) {
			$('tr:last').append('<td></td>');
		}	
	}
	while (row <= r);

	$('td').click(function() {
		var colorValue = $('#color-picker').val();
		$(this).attr('style', 'background-color:' + colorValue);
	});

	var borderHeight = document.querySelector('.border1');
	borderHeight.style.cssText += 'height: 605px';

}


// event listener for the Get Screenshot

function genScreenshot() {	
	html2canvas(document.querySelector('table'), {
	onrendered: function(canvas){	
	// resize the canvas
	var canvasHeight = document.querySelector('canvas');
	var canvasWidth = document.querySelector('canvas');
	canvas.style.cssText += 'height: 170px';
	canvas.style.cssText += 'width: 543px';	
	$('#screen-shot').attr('href', canvas.toDataURL("image/png"));
	$('#screen-shot').attr('download', "pixel.png");
	$('#screen-shot')[0].click();
	}
	})
} 



