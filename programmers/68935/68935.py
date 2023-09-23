def solution(n):
    arr = []
    while n != 0:
        arr.append(n % 3)
        n = n // 3
    answer = 0
    arr.reverse()
    for i in range(len(arr)):
        answer += arr[i] * 3 ** i
    return answer
