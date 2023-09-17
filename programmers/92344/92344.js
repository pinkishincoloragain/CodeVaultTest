function solution(board, skill) {
	const N = board.length,
		M = board[0].length;
	const newBoard = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

	const mark = (type, r1, c1, r2, c2, degree) => {
		if (type === 1) degree *= -1;
		newBoard[r1][c1] += degree;
		newBoard[r1][c2 + 1] -= degree;
		newBoard[r2 + 1][c1] -= degree;
		newBoard[r2 + 1][c2 + 1] += degree;
	};

	skill.forEach(s => {
		mark(...s);
	});

	// 행합
	for (let y = 0; y <= N; y++) {
		for (let x = 1; x <= M; x++) {
			newBoard[y][x] += newBoard[y][x - 1];
		}
	}

	let cnt = 0;
	// 열합
	for (let x = 0; x <= M; x++) {
		for (let y = 1; y <= N; y++) {
			newBoard[y][x] += newBoard[y - 1][x];
			if (newBoard[y - 1][x] + board[y - 1][x] > 0) cnt++;
		}
	}

	return cnt;
}
