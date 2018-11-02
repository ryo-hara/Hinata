var main_canvas;
var context;

const FLAME_SIZE_WIDTH = 960;
const FLAME_SIZE_HEIGHT = 640;

const COLOR_KHAKI = "#f0e68c";//カーキ色、要は黄色っぽいの
const COLOR_DODGERBLUE = "#1e90ff";//青っぽいの
const COLOR_SNOW = "#fffafa";

const COLOR_DEEP_COVE = "#130f40";
const COLOR_LIGHT_YELLOW = "#ffbe76";
const COLOR_DEEP_BLUE_FLAT = "#4834d4";
const COLOR_ICEPACK_BLUE_FLAT = "#c7ecee";

const COLOR_OBORO_MAIN = "#af9fea";
const COLOR_OBORO_BACK = "#8cdae2";



const MAIN_FLAME_MARGIN = 20;

const DISPLAY_SCORE_NUM = 5;

var test_name  = new Array(DISPLAY_SCORE_NUM);
var test_score = new Array(DISPLAY_SCORE_NUM);

var AJAX_URL_SIKE_CLEAR = "/sike_ajax_clear_scores";
var AJAX_URL_OBORO_CLEAR = "/oboro_ajax_clear_scores";
