var allButtons = $('#buttons>button')
var t = 0
var timer = setTimer()

for(let i = 0; i<allButtons.length;i++){
  $(allButtons[i]).on('click', function(x){
    var index = $(x.currentTarget).index()
    let n = index * -300
    $('#imges').css({
      transform: 'translateX('+ n +'px)'
    })
    styleChange(allButtons.eq(index))
    t = index
  })
}

$('.window').on('mouseenter',function(){
  clearInterval(timer)
})

$('.window').on('mouseleave',function(){
  timer = setTimer()
})

/***/
function setTimer(){
  return setInterval(()=>{
    t += 1
    var size = allButtons.length
    styleChange($(allButtons[t%size]).trigger('click'))
  },3000)
}
function styleChange($button){
  $button
  .addClass('red').siblings('.red').removeClass('red')
}