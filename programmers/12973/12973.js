function solution(str) {
	const stack = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== stack[stack.length - 1]) {
			stack.push(str[i]);
		} else {
			stack.pop();
		}
	}

	return stack.length === 0 ? 1 : 0;
}
