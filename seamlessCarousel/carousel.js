$('.imges>img:nth-child(1)').addClass('current')
$('.imges>img:nth-child(2)').addClass('enter')
$('.imges>img:nth-child(3)').addClass('leave')

var size = $('.imges').children().length
var n = 0

setInterval(()=>{
	if (n%3 === 0) {
		$('.imges>img:nth-child(1)').removeClass('leave current enter').addClass('leave')
		.one('transitionend',()=>{
			$('.imges>img:nth-child(1)').removeClass('leave').addClass('enter')
		})
		$('.imges>img:nth-child(2)').removeClass('leave current enter').addClass('current')
		$('.imges>img:nth-child(3)').removeClass('leave current enter').addClass('enter')
	}
	if (n%3 === 1) {
		$('.imges>img:nth-child(2)').removeClass('leave current enter').addClass('leave')
		.one('transitionend',()=>{
			$('.imges>img:nth-child(2)').removeClass('leave').addClass('enter')
		})
		$('.imges>img:nth-child(3)').removeClass('leave current enter').addClass('current')
		$('.imges>img:nth-child(1)').removeClass('leave current enter').addClass('enter')
	}
	if (n%3 === 2) {
		$('.imges>img:nth-child(3)').removeClass('leave current enter').addClass('leave')
		.one('transitionend',()=>{
			$('.imges>img:nth-child(3)').removeClass('leave').addClass('enter')
		})
		$('.imges>img:nth-child(1)').removeClass('leave current enter').addClass('current')
		$('.imges>img:nth-child(2)').removeClass('leave current enter').addClass('enter')
	}
	n = n + 1
},3000) 