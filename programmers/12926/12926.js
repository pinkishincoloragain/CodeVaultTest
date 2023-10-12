function solution(s, n) {
    const ALPHAS = 'abcdefghijklmnopqrstuvwxyz';
    const lower = [...ALPHAS];
    const upper = lower.map(v => v.toUpperCase());
    
    const shift = (alpha, isUpper) => {
        const findFrom = isUpper ? [...upper] : [...lower];
        return findFrom[(findFrom.indexOf(alpha) + n) % findFrom.length];
    }
    
    const conv = str => [...str].map(v => shift(v, v === v.toUpperCase())).join('');
    
    return s.split(' ').map(conv).join(' ');
}