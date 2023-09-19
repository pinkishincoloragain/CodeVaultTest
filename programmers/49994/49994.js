function solution(dirs) {
    const vSet = new Set();
    const move = {
        "L": [-1, 0],
        "R": [1, 0],
        "U": [0, 1],
        "D": [0, -1],
    };
    const addV = (startPos, endPos) => vSet.add(
        [(startPos[0] + endPos[0]) / 2, (startPos[1] + endPos[1]) / 2].join('-')
    );

    let pos = [0, 0];
    
    [...dirs].forEach(dir => {
        const mv = move[dir];
        const newPos = [pos[0] + mv[0], pos[1] + mv[1]];
        
        if(newPos[0] < -5 || newPos[0] > 5 || newPos[1] < -5 || newPos[1] > 5) return;
            
        addV(pos, newPos);
        pos = [...newPos];
    });
    
    console.log(vSet);
    
    return vSet.size;
}