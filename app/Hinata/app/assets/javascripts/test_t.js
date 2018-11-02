
function drawString_t(_context , _char_size , _string , _x , _y ){
    _context.font = _char_size+"px MPlus_1c_light";
    _context.fillText(_string,_x,_y);
}

function drawFlame_t(_context , _color){ 
    const MARGIN = MAIN_FLAME_MARGIN;
    _context.beginPath();
    _context.rect(0, 0, FLAME_SIZE_WIDTH, FLAME_SIZE_HEIGHT);
    _context.fillStyle = _color;//COLOR_DEEP_COVE;
    _context.fill();
    _context.closePath();
}

function drawIndividuallyFlame_t( _x , _y , _context , _color){//score個々のフレーム
    const MARGIN_X = 10;
    const MARGIN_Y = 10;
    const SIZE_Y = 100;
    const SIZE_X = 900;
    _context.beginPath();
    _context.rect(_x + MARGIN_X , _y + MARGIN_Y, SIZE_X , SIZE_Y);
    _context.fillStyle = _color;//COLOR_DEEP_BLUE_FLAT;
    _context.fill();
    _context.closePath();
}

function drawIndividuallyString_AddTimes(_context , _x , _y , _rank , _name , _score,_time,_string_color){
    _context.fillStyle = _string_color;//COLOR_SNOW;
    drawString_t(_context , "45" , _rank , _x , _y);
    drawString_t(_context , "45" , _score , _x + 125 , _y);

    var _time_srice = Array();
    var _time_more_detail = Array();
    _time_srice = _time.split("-");//2018-10-12T02:35:03.051Z
    _time_more_detail = _time_srice[2].split("T");//12T02:35:03.051Z
    var _date = _time_more_detail[0].split(".");
    _time_more_detail = _time_more_detail[1].split(".");//02:35:03

    var _time = Number(_time_more_detail[0].split(":")[0])+9;
    if(_time >= 24){
        _time = _time%24;
        _date = String(Number(_date)+1);
    }
    _time_more_detail[0] = String(_time) + ":" + _time_more_detail[0].split(":")[1] + ":" + _time_more_detail[0].split(":")[2] ;

    drawString_t(_context , "45" , _time_srice[1] + "月" , _x + 340 , _y);
    drawString_t(_context , "45" , String(_date) + "日" , _x + 450 , _y);
    drawString_t(_context , "45" , _time_more_detail[0] , _x + 600 , _y);
    // 11/02/12:10-20秒
}

function drawIndividuallyGameScoreCanvas(_url , _main_color, _back_color , _string_color) {

    var response_text;
    var response_json ;

    $.ajax({
        url: _url,
        type: 'get',
        dataType: 'json',
        async: true,

    }).fail(function(response) {
        
        alert('fail');

    }).done(function(response) {

        response_text = JSON.stringify(response);
        response_json = JSON.parse(response_text);
        
        main_canvas = document.getElementById('myCanvas');

        if (!main_canvas || !main_canvas.getContext) {
            return false;
        }
        context = main_canvas.getContext('2d');


        //画面内オブジェクトの全削除
        context.clearRect(0, 0, FLAME_SIZE_WIDTH, FLAME_SIZE_HEIGHT);


        drawFlame_t(context , _back_color);
        const ONCE_INDFLAME_SIZE = 120;//余白アリの一個のフレームのサイズ
    
        context.fillStyle = COLOR_SNOW;


        for(var i = 0; i < 5; i++){
            var create_time = response_json[i].created_at;

            drawIndividuallyFlame_t(MAIN_FLAME_MARGIN,MAIN_FLAME_MARGIN + ONCE_INDFLAME_SIZE*i,context , _main_color );
            drawIndividuallyString_AddTimes(context ,
                 MAIN_FLAME_MARGIN + 80 , MAIN_FLAME_MARGIN + ONCE_INDFLAME_SIZE*i + 70 
                , i + 1 , test_name[i] , response_json[i].value ,create_time , _string_color);
                //date処理の追加
        }
    
      });
 
}






function score_view_main(_name){

    if(_name == 'magic_wars_clear'){
        drawIndividuallyGameScoreCanvas(AJAX_URL_MAGICWARS_CLEAR , COLOR_MAGICWARS_MAIN , COLOR_MAGICWARS_BACK , COLOR_MAGICWARS_STRING )
        setInterval(drawIndividuallyGameScoreCanvas(AJAX_URL_MAGICWARS_CLEAR , COLOR_MAGICWARS_MAIN , COLOR_MAGICWARS_BACK , COLOR_MAGICWARS_STRING),10000)
    }

    if(_name == 'nastassja_clear'){
        drawIndividuallyGameScoreCanvas(AJAX_URL_NASTASSJA_CLEAR , COLOR_NASTASSJA_MAIN , COLOR_NASTASSJA_BACK , COLOR_NASTASSJA_STRING )
        setInterval(drawIndividuallyGameScoreCanvas(AJAX_URL_NASTASSJA_CLEAR , COLOR_NASTASSJA_MAIN , COLOR_NASTASSJA_BACK , COLOR_NASTASSJA_STRING),10000)
    }


    if(_name == 'oboro_clear'){
        drawIndividuallyGameScoreCanvas(AJAX_URL_OBORO_CLEAR , COLOR_OBORO_MAIN , COLOR_OBORO_BACK , COLOR_OBORO_STRING)
        setInterval(drawIndividuallyGameScoreCanvas(AJAX_URL_OBORO_CLEAR , COLOR_OBORO_MAIN , COLOR_OBORO_BACK , COLOR_OBORO_STRING),10000)
    }

    if(_name == 'reieiya_clear'){
        drawIndividuallyGameScoreCanvas(AJAX_URL_REIEIYA_CLEAR , COLOR_REIEIYA_MAIN , COLOR_REIEIYA_BACK , COLOR_REIEIYA_STRING )
        setInterval(drawIndividuallyGameScoreCanvas(AJAX_URL_REIEIYA_CLEAR , COLOR_REIEIYA_MAIN , COLOR_REIEIYA_BACK  , COLOR_REIEIYA_STRING ),10000)
    }

    if(_name == 'sike_clear'){
        drawIndividuallyGameScoreCanvas(AJAX_URL_SIKE_CLEAR , COLOR_DEEP_COVE , COLOR_DEEP_BLUE_FLAT , COLOR_SNOW )
        setInterval(drawIndividuallyGameScoreCanvas(AJAX_URL_SIKE_CLEAR , COLOR_DEEP_COVE , COLOR_DEEP_BLUE_FLAT , COLOR_SNOW ),10000)
    }

}

