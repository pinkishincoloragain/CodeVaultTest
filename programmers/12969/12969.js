process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [r, c] = data.split(" ").map(v => +v);
    
    console.log(Array.from({length : c}, () => '*'.repeat(r)).join('\n'));
});