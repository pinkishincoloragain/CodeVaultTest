from functools import reduce
def solution(n):
    return reduce(lambda acc, cur: acc + cur, list(map(int, list(f"{n}"))), 0) 