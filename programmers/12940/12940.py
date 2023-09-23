import math

def solution(n, m):
    a = max(n, m)
    b = min(n, m)
    
    while a % b != 0:
        nam = a % b
        a = b
        b = nam
    lcm = b
    # print(lcm)
    return [lcm, n * m / lcm]
        