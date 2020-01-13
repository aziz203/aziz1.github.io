var images=[
"photos/a (1).jpg",
"photos/a (2).jpg",
"photos/a (3).jpg",
"photos/a (5).jpg",
"photos/a (6).jpg"
];

var r=0;
function slide(){
			document.getElementById('first').src=images[r]
	if (r<(images.length-1)){
		r++
	}
		else{
			r=0
		}
}
setInterval(slide,2000);