var main_canvas;
var context;

const UPDATE_INTERVAL = 1000;

const FLAME_SIZE_WIDTH = 960;
const FLAME_SIZE_HEIGHT = 640;

const COLOR_KHAKI = "#f0e68c";//カーキ色、要は黄色っぽいの
const COLOR_DODGERBLUE = "#1e90ff";//青っぽいの
const COLOR_SNOW = "#fffafa";

const COLOR_DEEP_COVE = "#130f40";
const COLOR_LIGHT_YELLOW = "#ffbe76";
const COLOR_DEEP_BLUE_FLAT = "#4834d4";
const COLOR_ICEPACK_BLUE_FLAT = "#c7ecee";

const COLOR_OBORO_MAIN = "#8cdae2";
const COLOR_OBORO_BACK = "#af9fea";
const COLOR_OBORO_STRING = '#ffffff';

const COLOR_REIEIYA_MAIN = "#ffc048";
const COLOR_REIEIYA_BACK = "#9AECDB";
const COLOR_REIEIYA_STRING = '#ffffff';

const COLOR_NASTASSJA_MAIN = "#eccc68";
const COLOR_NASTASSJA_BACK = "#70a1ff";//70a1ff
const COLOR_NASTASSJA_STRING = '#ffffff';

const COLOR_MAGICWARS_MAIN = "#ff4757";
const COLOR_MAGICWARS_BACK = "#ffffff";
const COLOR_MAGICWARS_STRING = '#ffffff';

const COLOR_YADOKARI_MAIN = "#ffc048";
const COLOR_YADOKARI_BACK = "#ff7979";
const COLOR_YADOKARI_STRING = '#ffffff';





const MAIN_FLAME_MARGIN = 20;

const DISPLAY_SCORE_NUM = 5;

var test_name  = new Array(DISPLAY_SCORE_NUM);
var test_score = new Array(DISPLAY_SCORE_NUM);

var AJAX_URL_SIKE_CLEAR = "/sike_ajax_clear_scores";
var AJAX_URL_OBORO_CLEAR = "/oboro_ajax_clear_scores";
var AJAX_URL_REIEIYA_CLEAR = "/reieiya_ajax_clear_scores";
var AJAX_URL_NASTASSJA_CLEAR = "/nastassja_ajax_clear_scores";
var AJAX_URL_MAGICWARS_CLEAR = "/magic_wars_ajax_clear_scores";
var AJAX_URL_YADOKARI_CLEAR = "/yadokari_ajax_clear_scores";

