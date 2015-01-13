var bani = {
	$not: 0,
	$kit: 1,
	$std: 2
};

switch(""){
	case document.body.style.webkitAnimation:
		bani.mode = bani.$kit;
		break;
	case document.body.style.animation:
		bani.mode = bani.$std;
		break;
	default:
		bani.mode = bani.$not;
}