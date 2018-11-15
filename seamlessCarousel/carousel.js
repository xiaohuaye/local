// 初始化
$('.imges>img:nth-child(1)').addClass('current')
$('.imges>img:nth-child(1)').siblings().addClass('enter')

var size = $('.imges').children().length
var n = 0
var timer = setTimer()
$('.window').on('mouseenter',function(){
	clearInterval(timer)
})
$('.window').on('mouseleave',function(){
  timer = setTimer()
})
$('.localPic>span').on('mouseenter',function(x){
	let index1 = $(x.currentTarget).index()
	clearInterval(timer)
	redSpot(index1)
	CurrentChangeLeave(index1-1)
	nextEnterChangeCurrentAndOthersChangeEnter(index1-1,size)
})
$('.localPic>span').on('mouseleave',function(){
	timer = setTimer()
})
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
function redSpot(y){
	$('.localPic>span').removeClass('red')
	$('.localPic>span:nth-child('+ (y+1) +')').addClass('red')
}

function setTimer(){
	return setInterval(()=>{
	let x = n%size
		CurrentChangeLeave(x)
		nextEnterChangeCurrentAndOthersChangeEnter(x,size)
	let index = $('.current').index()
		redSpot(index)
	n = n + 1
	},3000) 
}