

	
// 	function hasil(form){
// 		var ques1=form.ques1.value;
// 		var ques2=form.ques2.value;
// 		var ques3=form.ques3.value;
// 		var nilai=0;
// 		var salah=0;
// 		var arr=["<img src=images/gift.gif>","<img src=images/kamera.gif>","<img src=images/mimi.jpg>"];

// 		if(ques1=="aov"){
// 			nilai++;
// 		}
// 		if(ques2=="mangga"){
// 			nilai++;
// 		}
// 		if(ques3=="mimi"){
// 			nilai++;
// 		}

// 		if(ques1!=="aov"){
// 			salah++;
// 		}
// 		if(ques2!=="mangga"){
// 			salah++;
// 		}
// 		if(ques3!=="mimi"){
// 			salah++;
// 		}
// 		document.getElementById('jumlah').innerHTML="jawaban benar "+nilai+" jawaban salah "+salah;
// 	if(nilai==0){
// 			document.getElementById('gambar').innerHTML="<img src=images/gift.gif>";
// 		}
// 		if(nilai==1){
// 			document.getElementById('gambar').innerHTML=arr[1];
// 		}
// 		if(nilai>=2){
// 			document.getElementById('gambar').innerHTML=arr[2];
// 		}

// 	}

		

// 	$('#hide2').hide();
// 	$('#hide3').hide();
// 	$('#next1').hide();
// 	$('#button').hide();
// 	$('#next').click(function(){
// 		$('#hide1').hide();
// 		$('#hide2').show();
// 		$('#next').hide();
// 		$('#next1').show();
// 	});
// 	$('#next1').click(function(){
// 		$('#hide1').hide();
// 		$('#hide2').hide();
// 		$('#hide3').show();
// 		$('#button').show();
// 		$('#next1').hide();
// 	});

// var a= document.getElementById('r');
// var jumlah=document.getElementById('jumlah');
// a.addEventListener('input',function(){
// 	var tampil=document.getElementById('tampil');
// 	document.body.style.backgroundColor="rgb("+a.value+","+g.value+","+b.value+")";
// 	jumlah.innerHTML="r="+a.value +" "+"g="+ g.value +" "+"b="+ b.value;
// });
// var g= document.getElementById('g');
// g.addEventListener('input',function(){
// 	var tampil=document.getElementById('tampil');
// 	document.body.style.backgroundColor="rgb("+a.value+","+g.value+","+b.value+")";
// 	jumlah.innerHTML="r="+a.value +" "+"g="+ g.value +" "+"b="+ b.value;
// });
// var b= document.getElementById('b');
// b.addEventListener('input',function(){
// 	var tampil=document.getElementById('tampil');
// 	document.body.style.backgroundColor="rgb("+a.value+","+g.value+","+b.value+")";
// 	jumlah.innerHTML="r="+a.value +" "+"g="+ g.value +" "+"b="+ b.value;
// });


// var anima= document.getElementById('anima');
// anima.addEventListener('input',function(){
// 	var animasi=document.getElementById('animasi');
// 	animasi.style.borderRadius=anima.value+"%";
// });

// var cepat= document.getElementById('cepat');
// cepat.addEventListener('change',function(){
// 	var animasi=document.getElementById('animasi');
// 	animasi.style.animationDuration=cepat.value+"ms";
// });
// var animasii=document.getElementById('animasi');
// animasii.addEventListener('mouseenter',function(){
// 	alert('ahirnya');
// });

var array=['<img src="images/love1.gif">','<img src="images/kamera.gif">','<img src="images/lawah.gif">','<img src="images/pisang.gif">','<img src="images/gift1.gif">','<img src="images/book.gif">','<img src="images/book2.gif">','<img src="images/tangan.gif">'];
var fotoglaki=['<img class="fhover" src="images/p1.jpg">','<img class="fhover" src="images/p2.jpg">','<img class="fhover" src="images/p3.jpg">','<img class="fhover" src="images/p4.jpg">','<img class="fhover" src="images/p5.jpg">','<img class="fhover" src="images/p6.jpg">','<img class="fhover" src="images/p7.jpg">','<img class="fhover" src="images/p8.jpg">'];
var fotogcewe=['<img class="fhover" src="images/c1.jpg">','<img class="fhover" src="images/c2.jpg">','<img class="fhover" src="images/c3.jpg">','<img class="fhover" src="images/c4.jpg">','<img class="fhover" src="images/c5.jpg">','<img class="fhover" src="images/c6.jpg">','<img class="fhover" src="images/c7.jpg">','<img class="fhover" src="images/c8.jpg">'];
var time=[3000,4000,5000,6000,7000,8000];


var roll= Math.round(Math.random()*8);
var mulai=document.getElementById('mulai');
var putar=document.getElementById('putar');





$(document).ready(function(){
	var gamb=['love1','kamera','lawah','pisang'];

	
	


// var i=0;

// 	$('#no1').click(function(){

// 	var awal=new Date().getTime();
// 	setInterval(function(){
// 		if(new Date().getTime()-awal>4000){
// 		clearInterval;
// 		return;
// 	}
// 		$('#no1').html(array[i++]);
// 	if(i==array.length){
// 		i=0;
// 	}
// 	},100);	
		
	// });
	$('#tunggu').hide();
	var hitung=0;
	var persen =0;
	$('#start').click(function(){
		hitung++;
		// console.log(hitung);
		$('#tulis').text('Putaran ke-'+hitung);
		var acak1= Math.round(Math.random()*7);
		var acak2= Math.round(Math.random()*7);
		var acak3= Math.round(Math.random()*7);
		// console.log(acak1);
		// console.log(acak2);
		// console.log(acak3);
		$('#no1,#no2,#no3').text('');
		$('#tunggu').show();
		$('#rell')[0].play();

		$('#no1,#no2,#no3').addClass('animasi');
		setTimeout(function() {
			$('#no1').removeClass('animasi');
			$('#no1').html(array[acak1]);
		}, 2000);
		setTimeout(function() {
			$('#no2').removeClass('animasi');
			$('#no2').html(array[acak2]);
		}, 3000);
		setTimeout(function() {
			// $('#start').hide();
			$('#rell')[0].pause();
			$('#no3').removeClass('animasi');
			$('#no3').html(array[acak3]);
			$('#tunggu').hide();
			$('#start').text('Lagi');
		}, 4000);

		if(acak1 == acak2 || acak1 ==acak3 || acak2 == acak3){
			persen++
			var doublepersen=persen*4;
			setTimeout(function() {
				$('.persentase').css('width',doublepersen+'%');
				$('.persentase').text(doublepersen+'%');
			}, 4000);
			if(doublepersen >= 100){
				setTimeout(function() {
					$('#no1').html(array[7]);
				}, 2000);
				setTimeout(function() {
					$('#no2').html(array[7]);
				}, 3000);
				setTimeout(function() {
					$('#api').html('<img src="images/api.gif">');
					$('#no3').html(array[7]);
					$('#reward').show();
				}, 4000);
				return false;
			}
		}
		for(var countacak=0 ; countacak < 8 ; countacak++){
			if(acak1==countacak && acak2==countacak && acak3==countacak){
				setTimeout(function() {
					$('#api').html('<img src="images/api.gif">');
					$('#reward').show();
					
				}, 4000);
			}
		}

		// if(acak1==0 && acak2==0 && acak3==0){
		// 	setTimeout(function() {
		// 		$('#api').html('<img src="images/api.gif">');
		// 		$('#reward').show();
				
		// 	}, 4000);
		// }
		// if(acak1==1 && acak2==1 && acak3==1){
		// 	setTimeout(function() {
		// 		$('#api').html('<img src="images/api.gif">');
		// 		$('#reward').show();
		// 	}, 4000);	
		// }
		// if(acak1==2 && acak2==2 && acak3==2){
		// 	setTimeout(function() {
		// 		$('#api').html('<img src="images/api.gif">');
		// 		$('#reward').show();
		// 	}, 4000);
		// }
		// if(acak1==3 && acak2==3 && acak3==3){
		// 	setTimeout(function() {
		// 		$('#api').html('<img src="images/api.gif">');
		// 		$('#reward').show();
		// 	}, 4000);
		// }
		// if(hitung==30){
		// 	setTimeout(function() {
		// 		$('#no1').html(array[7]);
		// 	}, 3000);
		// 	setTimeout(function() {
		// 		$('#no2').html(array[7]);
		// 	}, 5000);
		// 	setTimeout(function() {
		// 		$('#api').html('<img src="images/api.gif">');
		// 		$('#no3').html(array[7]);
		// 		$('#reward').show();
		// 	}, 7000);
			
			
		// }

	});


	$('#masuknama').hide();
	$('#lihatreward').hide();
	$('#reward').hide();
	// $('#lagi').click(function(){
	// 	window.location.reload();
	// });

	// if(acak1==4 && acak2==4 && acak3==4){
	// 		setTimeout(function() {
	// 			$('#api').html('<img src="images/api.gif">');
	// 			$('#reward').show();
	// 		}, 7000);
	// }
	// if(acak1==5 && acak2==5 && acak3==5){
	// 		setTimeout(function() {
	// 			$('#api').html('<img src="images/api.gif">');
	// 			$('#reward').show();
	// 		}, 7000);
	// }
	// if(acak1==6 && acak2==6 && acak3==6){
	// 	$('#start').click(function(){
	// 		setTimeout(function() {
	// 			$('#api').html('<img src="images/api.gif">');
	// 			$('#reward').show();
	// 		}, 7000);
			
	// 	});
	// }
	// if(acak1==7 && acak2==7 && acak3==7){
	// 	$('#start').click(function(){
	// 		setTimeout(function() {
	// 			$('#api').html('<img src="images/api.gif">');
	// 			$('#reward').show();
	// 		}, 7000);
			
	// 	});
	// }


	$('#reward').click(function(){
		$('#masuknama').show();
		$('#header').addClass('blur');
	});

	$('#back').click(function(){
		$('#masuknama').hide();
		$('#header').removeClass('blur');
	});

	$('#span').focusin(function(){
		$('#span').hide();
	});

	$('#button').click(function(){
		$('#nama').val();
		
		if($('#nama').val().length==0){
			$('#span').text('nama tidak boleh kosong');
		}else{
			$('#lihatreward').show();
			$('#selamat').text('Selamat '+$('#nama').val());
			if($('.gender').val()=='laki-laki'){
				$('#foto').html(fotoglaki[roll]);
			}else{
				$('#foto').html(fotogcewe[roll]);
			}
		}
	});

	$('.gender').on('change',function(){
		$('.hidegender').hide();
		$('#start').fadeIn();
	})

	$('#mainlagi').click(function(){
		window.location.reload();
	});




});


