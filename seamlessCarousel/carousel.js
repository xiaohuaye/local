// 初始化
$('.imges>img:nth-child(1)').addClass('current')
$('.imges>img:nth-child(1)').siblings().addClass('enter')

var size = $('.imges').children().length
var n = 0

setInterval(()=>{
	let x = n%size
		CurrentChangeLeave(x)
		nextEnterChangeCurrentAndOthersChangeEnter(x,size)
	n = n + 1
},3000) 

//函数声明
function CurrentChangeLeave(y){
	$('.imges>img:nth-child('+ (y+1) +')').removeClass('leave current enter').addClass('leave')
	.one('transitionend',()=>{
		$('.imges>img:nth-child('+ (y+1) +')')
		.removeClass('leave').addClass('enter')
	})
}
function nextEnterChangeCurrentAndOthersChangeEnter(y,n){
	if (y+1<n) {
			$('.imges>img:nth-child('+ (y+2) +')').removeClass('leave current enter').addClass('current')
			$('.imges>img:nth-child('+ (y+2) +')').siblings().not('.imges>img:nth-child('+ (y+1) +')')
			.removeClass('leave current enter').addClass('enter')
		}else{
			$('.imges>img:nth-child(1)').removeClass('leave current enter').addClass('current')
			$('.imges>img:nth-child(1)').siblings().not('.imges>img:nth-child('+ (y+1) +')')
			.removeClass('leave current enter').addClass('enter')
		}
}