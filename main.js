exports.findMostLength = function (a = []) {
	if (Array.isArray(a) === false) {
		return null;
	}
	l= [0];
	for (let i =0; i<a.length; i++) {
		if (typeof l[a[i].length] =="undefined") {
			l[a[i].length] = 1;
		} else {
			l[a[i].length]++;
		}
	}
	return l.indexOf(Math.max.apply(null,l));
}


exports.top2sum = function (a =[]) {
	if (Array.isArray(a) === false) {
		return null;
	}
	t = a.sort((a, b) => b - a).slice(0,2);
	return parseFloat(t.reduce((a,b) => a + b, 0));
}