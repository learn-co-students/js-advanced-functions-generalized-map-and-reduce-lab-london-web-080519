// Add your functions here

function map(array, work) {
	return array.map(function(item) {
		return work(item);
	});
}

function reduce(array, work, initial = 0) {
	if (initial != 0) {
		return initial + array.reduce(work);
	} else {
		return array.reduce(work);
	}
}
