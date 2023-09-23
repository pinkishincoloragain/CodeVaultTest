def solution(arr, divisor):
    res = list(filter(lambda x: x % divisor == 0, arr))
    return sorted(res) if len(res) > 0 else [-1]