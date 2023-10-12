function solution(d, budget) {
    d.sort((a, b) => a - b);
    let acc = d[0];
    
    if(d[0] > budget) return 0;
    
    for(let i=1; i<d.length; i+=1){
        acc = acc + d[i];
        if(acc > budget) return i;
    }
    
    return d.length;
}