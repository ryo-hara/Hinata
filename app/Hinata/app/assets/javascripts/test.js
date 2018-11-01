

test_name[0] = "AAA";
test_name[1] = "BBB";
test_name[2] = "CCC";
test_name[3] = "DDD";
test_name[4] = "EEE";

test_score[0] = "1000";
test_score[1] = "900";
test_score[2] = "800";
test_score[3] = "700";
test_score[4] = "600";





function drawString(_context , _char_size , _string , _x , _y ){
    _context.font = _char_size+"px cursive";
    _context.fillText(_string,_x,_y);
}

function drawFlame(_context){ 
    const MARGIN = MAIN_FLAME_MARGIN;
    _context.beginPath();
    _context.rect(MARGIN, MARGIN, FLAME_SIZE_WIDTH-MARGIN*2, FLAME_SIZE_HEIGHT-MARGIN*2);
    _context.fillStyle = COLOR_KHAKI;
    _context.fill();
    _context.closePath();
}

function drawIndividuallyFlame( _x , _y , _context ){//score個々のフレーム
    const MARGIN_X = 10;
    const MARGIN_Y = 10;
    const SIZE_Y = 100;
    const SIZE_X = 900;
    _context.beginPath();
    _context.rect(_x + MARGIN_X , _y + MARGIN_Y, SIZE_X , SIZE_Y);
    _context.fillStyle = COLOR_DODGERBLUE;
    _context.fill();
    _context.closePath();
}

function drawIndividuallyString(_context , _x , _y , _rank , _name , _score){
    _context.fillStyle = COLOR_SNOW;
    drawString(_context , "45" , _rank , _x , _y);
    drawString(_context , "45" , _name , _x + 200 , _y);
    drawString(_context , "45" , _score , _x + 600 , _y);
}



function drawCanvas() {
    main_canvas = document.getElementById('myCanvas');

    if (!main_canvas || !main_canvas.getContext) {
        return false;
    }
    context = main_canvas.getContext('2d');

    drawFlame(context);
    const ONCE_INDFLAME_SIZE = 120;//余白アリの一個のフレームのサイズ
    for(var i = 0; i < 5; i++){
        drawIndividuallyFlame(MAIN_FLAME_MARGIN,MAIN_FLAME_MARGIN + ONCE_INDFLAME_SIZE*i,context);
        drawIndividuallyString(context ,
             MAIN_FLAME_MARGIN + 20 , MAIN_FLAME_MARGIN + ONCE_INDFLAME_SIZE*i + 70 
            , i + 1 , test_name[i] , gon.test_sike_clear_scores[i].value);
    }
}


