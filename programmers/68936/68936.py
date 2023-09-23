import sys
sys.setrecursionlimit(10**6)
zeros = 0
ones = 0

def solution(arr):
    dnc(arr)
    return [zeros, ones]
    
def dnc(arr):
    global zeros
    global ones
    
    result = sum(map(lambda x: sum(x), arr))
    
    if result == 0:
        zeros += 1
        return
        
    elif result == len(arr) ** 2:
        ones += 1
        return
        
    # else if len(arr) == 1:
    #     if arr[0] == 0:
    #         zeros += 1
    #     else:
    #         ones += 1
    #     return zeros, ones
    
    else:
        size = len(arr) // 2
        dnc([item[0:size] for item in arr[0:size]])
        dnc([item[size:size*2] for item in arr[0:size]])
        dnc([item[0:size] for item in arr[size:size*2]])
        dnc([item[size:size*2] for item in arr[size:size*2]])

    