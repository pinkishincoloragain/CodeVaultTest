from functools import reduce
def solution(n):
    return sum(list(map(int, list(f"{n}"))))