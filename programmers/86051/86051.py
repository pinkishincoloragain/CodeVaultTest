def solution(numbers):
    return sum({i for i in range(1, 10)} - set(numbers))