// $(document).ready(function(){
//     $.getJSON("sanofi-animation.json", function(data){
//         // console.log(data.layers[5].shapes[0].it[2].c.k);
//         console.log(data.layers);
//         var cog_blue = data.layers[5].shapes[0].it[2].c.k
//         var cog_white = data.layers[2].shapes[0].it[2].c.k
//         var cog_black = data.layers[8].shapes[0].it[2].c.k
//         console.log(cog_blue);
//         console.log(cog_white);
//         console.log(cog_black);
//     });
// });

// if(document.getElementById('accelerator_logo').clicked == true)
// {
//      console.log("button was clicked");
// }

// function showProblemBubbles() {
//     $.getJSON("sanofi-animation.json", function(data) {
//         var cog_blue = data.layers[5].shapes[0].it[2].c.k
//         var cog_white = data.layers[2].shapes[0].it[2].c.k
//         var cog_black = data.layers[8].shapes[0].it[2].c.k
//         console.log(cog_blue);
//     });
//   }


//
// $('#accelerator_logo').click(function() {
//   console.log("hi");
//   $.getJSON("sanofi-animation.json", function(data){
//       console.log(data.layers[5].shapes[0].it[2].c.k);
//       data.layers[5].shapes[0].it[2].c.k = [0.64705882352, 0.78039215686, 0.83137254902, 1]
//       console.log(data.layers[5].shapes[0].it[2].c.k);
//       localStorage.setItem("sanofi-animation.json", JSON.stringify(data))
//       data = JSON.parse(localStorage.getItem('sanofi-animation.json'))
//       console.log(data.layers[5].shapes[0].it[2].c.k);
//
//   });
// });


function showProblemBubbles() {
	document.getElementById("a4").style.display = "block";
	document.getElementById("a16").style.display = "block";
	document.getElementById("a1").style.display = "block";
	document.getElementById("a0").style.display = "block";
	document.getElementById("accelerator_logo").style.fill = "#5EC7EB";

	document.getElementById("a7").style.display = "none";
	document.getElementById("a6").style.display = "none";

	document.getElementById("line-5").style.display = "none";
	document.getElementById("line-6").style.display = "none";
}

function showPreparationBubbles() {
	document.getElementById("a10").style.display = "block";
	document.getElementById("a11").style.display = "block";
	document.getElementById("a12").style.display = "block";
	document.getElementById("a13").style.display = "block";
	document.getElementById("a14").style.display = "block";
	document.getElementById("a15").style.display = "block";
	document.getElementById("mm_logo").style.fill = "#5EC7EB";

	document.getElementById("a3").style.display = "none";
	document.getElementById("a2").style.display = "none";
	document.getElementById("a17").style.display = "none";
	document.getElementById("a18").style.display = "none";

	document.getElementById("a6").style.display = "none";
	document.getElementById("a7").style.display = "none";

	document.getElementById("line-1").style.display = "none";
	document.getElementById("line-2").style.display = "none";
	document.getElementById("line-3").style.display = "none";
	document.getElementById("line-4").style.display = "none";
	document.getElementById("line-5").style.display = "none";
	document.getElementById("line-6").style.display = "none";
}

function showInsightBubbles() {
	document.getElementById("a5").style.display = "block";
	document.getElementById("a8").style.display = "block";
	document.getElementById("a9").style.display = "block";
	document.getElementById("ripple_logo").style.fill = "#5EC7EB";

	document.getElementById("a3").style.display = "none";
	document.getElementById("a2").style.display = "none";
	document.getElementById("a17").style.display = "none";
	document.getElementById("a18").style.display = "none";

	document.getElementById("line-1").style.display = "none";
	document.getElementById("line-2").style.display = "none";
	document.getElementById("line-3").style.display = "none";
	document.getElementById("line-4").style.display = "none";
}

function showProblemBubbles_2() {
	document.getElementById("a17").style.display = "block";
	document.getElementById("a18").style.display = "block";
	document.getElementById("line-1").style.display = "block";
	document.getElementById("line-3").style.display = "block";

}

function showProblemBubbles_3() {
	document.getElementById("a2").style.display = "block";
	document.getElementById("a3").style.display = "block";
	document.getElementById("line-2").style.display = "block";
	document.getElementById("line-4").style.display = "block";
}

function showInsightBubbles_2() {
	document.getElementById("a6").style.display = "block";
	document.getElementById("a7").style.display = "block";
	document.getElementById("line-5").style.display = "block";
	document.getElementById("line-6").style.display = "block";
}

function greyOut_ripple() {
	document.getElementById("greyOut_black").style.display = "block";
	document.getElementById("greyOut_blue").style.display = "block";
	document.getElementById("greyOut_white").style.display = "none";
}

function greyOut_mm() {
	document.getElementById("greyOut_black").style.display = "block";
	document.getElementById("greyOut_white").style.display = "block";
	document.getElementById("greyOut_blue").style.display = "none";
}

function greyOut_accelerator() {
	document.getElementById("greyOut_white").style.display = "block";
	document.getElementById("greyOut_blue").style.display = "block";
	document.getElementById("greyOut_black").style.display = "none";
}

function resetColor() {
	document.getElementById("accelerator_logo").style.fill = "#192326";
	document.getElementById("ripple_logo").style.fill = "#192326";
	document.getElementById("mm_logo").style.fill = "#192326";
	// document.getElementById("greyOut_white").style.display = "none";
	// document.getElementById("greyOut_blue").style.display = "none";
	// document.getElementById("greyOut_black").style.display = "none";
}

function show_all() {
	document.getElementById("a1").style.display = "block";
	document.getElementById("a2").style.display = "block";
	document.getElementById("a3").style.display = "block";
	document.getElementById("a4").style.display = "block";
	document.getElementById("a5").style.display = "block";
	document.getElementById("a6").style.display = "block";
	document.getElementById("a7").style.display = "block";
	document.getElementById("a8").style.display = "block";
	document.getElementById("a9").style.display = "block";
	document.getElementById("a10").style.display = "block";
	document.getElementById("a11").style.display = "block";
	document.getElementById("a12").style.display = "block";
	document.getElementById("a13").style.display = "block";
	document.getElementById("a14").style.display = "block";
	document.getElementById("a15").style.display = "block";
	document.getElementById("a16").style.display = "block";
	document.getElementById("a17").style.display = "block";
	document.getElementById("a18").style.display = "block";
	document.getElementById("line-1").style.display = "block";
	document.getElementById("line-2").style.display = "block";
	document.getElementById("line-3").style.display = "block";
	document.getElementById("line-4").style.display = "block";
	document.getElementById("line-5").style.display = "block";
	document.getElementById("line-6").style.display = "block";
	document.getElementById("greyOut_white").style.display = "none";
	document.getElementById("greyOut_blue").style.display = "none";
	document.getElementById("greyOut_black").style.display = "none";
}
