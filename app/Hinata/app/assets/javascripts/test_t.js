var main_canvas;
var context;

const FLAME_SIZE_WIDTH_t = 960;
const FLAME_SIZE_HEIGHT_t = 640;

const MAIN_FLAME_MARGIN_t = 20;

const DISPLAY_SCORE_NUM_t = 5;

var test_name  = new Array(DISPLAY_SCORE_NUM);
var test_score = new Array(DISPLAY_SCORE_NUM);

var test_update_month = new Array(DISPLAY_SCORE_NUM);
var test_update_day   = new Array(DISPLAY_SCORE_NUM);
var test_update_time  = new Array(DISPLAY_SCORE_NUM);
var test_update_second = new Array(DISPLAY_SCORE_NUM);

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









function drawString_t(_context , _char_size , _string , _x , _y ){
    _context.font = _char_size+"px cursive";
    _context.fillText(_string,_x,_y);
}

function drawFlame_t(_context){ 
    const MARGIN = MAIN_FLAME_MARGIN;
    _context.beginPath();
    _context.rect(MARGIN, MARGIN, FLAME_SIZE_WIDTH-MARGIN*2, FLAME_SIZE_HEIGHT-MARGIN*2);
    _context.fillStyle = COLOR_KHAKI;
    _context.fill();
    _context.closePath();
}

function drawIndividuallyFlame_t( _x , _y , _context ){//score個々のフレーム
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

function drawIndividuallyString_AddTimes(_context , _x , _y , _rank , _name , _score,_time){
    _context.fillStyle = COLOR_SNOW;
    drawString(_context , "45" , _rank , _x , _y);
    drawString(_context , "45" , _score , _x + 125 , _y);

    var _time_srice = Array();
    var _time_more_detail = Array();
    _time_srice = _time.split("-");//2018-10-12T02:35:03.051Z
    _time_more_detail = _time_srice[2].split("T");//12T02:35:03.051Z
    _time_more_detail = _time_more_detail[1].split(".");//02:35:03

    drawString(_context , "45" , _time_srice[1] + "月" , _x + 340 , _y);
    drawString(_context , "45" , _time_srice[2].split("T")[0] + "日" , _x + 450 , _y);
    drawString(_context , "45" , _time_more_detail[0] , _x + 600 , _y);
    // 11/02/12:10-20秒
}



function drawCanvas_t() {
    main_canvas = document.getElementById('myCanvas');

    if (!main_canvas || !main_canvas.getContext) {
        return false;
    }
    context = main_canvas.getContext('2d');

    drawFlame_t(context);
    const ONCE_INDFLAME_SIZE = 120;//余白アリの一個のフレームのサイズ
    for(var i = 0; i < 5; i++){
        drawIndividuallyFlame_t(MAIN_FLAME_MARGIN,MAIN_FLAME_MARGIN + ONCE_INDFLAME_SIZE*i,context);
        drawIndividuallyString_AddTimes(context ,
             MAIN_FLAME_MARGIN + 80 , MAIN_FLAME_MARGIN + ONCE_INDFLAME_SIZE*i + 70 
            , i + 1 , test_name[i] , gon.test_sike_clear_scores[i].value ,gon.test_sike_clear_scores[i].created_at);
            //date処理の追加
    }
}


