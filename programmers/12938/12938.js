function solution(n, s) {
    if(n > s) return [-1];
    const res = Array(n).fill(Math.floor(s / n));
    
    for(let i = 0; i < s % n; i+=1){
        res[n - 1 - i] += 1;
    }
    return res;
}