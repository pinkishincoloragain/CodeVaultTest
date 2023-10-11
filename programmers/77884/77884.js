function solution(left, right) {
    return Array.from({length: right - left + 1}, (_, idx) => idx + left)
        .reduce((acc, cur) => Math.floor(Math.sqrt(cur)) === Math.sqrt(cur)
                ? acc - cur : acc + cur, 0);
}