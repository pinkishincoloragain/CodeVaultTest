function solution(left, right) {
    const getDivsNum = num => {
        let cnt = 0;
        for(let i=1; i ** 2 <= num; i+=1){
            if(num % i === 0) cnt += 2;
            if(num === i ** 2) cnt -= 1;
        }
        return cnt;
    }
        
    return Array.from({length: right - left + 1}, (_, idx) => idx + left)
        .reduce((acc, cur) => getDivsNum(cur) % 2 === 0 ? acc + cur : acc - cur, 0);
}