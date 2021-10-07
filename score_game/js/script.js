$(function(){
    let width = screen.width - 100;
    let height = screen.height - 200;
    let code = 0; 

    // 스타트 버튼을 클릭하면 이 버튼은 사라지고 점수 표시가 나타남
    $('#start').click(function(){
        $(this).fadeOut('slow');
        $('#score').fadeIn('slow');
        playGame();
    });

    // 화면에 bubble 복제해서 랜덤으로 위치 나타내기
    function playGame(){
        let ascii = Math.floor(Math.random()*(90 - 65 + 1)) + 65;
        let color = randomColor();
        let toString = String.fromCharCode(ascii);
        let top = Math.floor(Math.random()*height);
        let left = Math.floor(Math.random()*width);
        let alp = '<span class="bubble bull' + ascii + '" style="left: ' + 
                  left + 'px; top: ' + top + 'px; background-color: '+ color  +
                  '">' + toString + '</span>';
        
        $('body').append(alp);
        setTimeout(playGame, 1000);
    }

    // 버블의 배경색을 랜덤으로 바꿔주는 함수
    function randomColor(){
        let color = "#";
        let colorList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','a','b','c','d','e','f'];
        for(let i = 0; i < 6; i++) {
            let random = colorList[Math.floor(Math.random()*15)];
            color += random;
        }
        return color;
    }

    // 키보드의 타이핑과 화면의 버블이 알파벳이 일치하면 버블이 없어지고
    // 점수가 개당 20점씩 올라간다.
    $(document).keydown(function(event){
        let keycode = event.keyCode;
        $('.bull'+keycode).animate({
            top: height+"px",
            opacity: 0
        }, 'slow');
        $('.bull'+keycode).fadeOut('slow').hide('slow', function(){
            code += 20;
            $('#score').html(code);
            $(this).remove();
        })
    })
})