def solution(array, commands):
    ans = []
    for com in commands:
        start, end, nth = com
        ans.append(sorted(array[start - 1 : end])[nth - 1])
    return ans