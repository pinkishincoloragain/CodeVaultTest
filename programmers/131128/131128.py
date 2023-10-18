from collections import Counter

def solution(X, Y):
    x = Counter(X)
    y = Counter(Y)
    answer = ''
    
    for k in sorted([key for key in x.keys() if key in y.keys()], reverse=True):
        answer += k * min(x[k], y[k])
    if answer == '':
        return '-1'

    
    if answer.startswith('0'):
        return '0'
    
    return answer