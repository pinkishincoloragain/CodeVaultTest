# def solution(n, arr1, arr2):
#     answer = []
    
#     for i, j in zip(arr1, arr2):
#         line = bin(i | j)[2:]
#         res = ''.join(list(map(lambda x: '#' if x == '1' else ' ', list(str(line).zfill(n)))))
#         answer.append(res)
    
#     return answer

def solution(n, arr1, arr2):
    # answer = []
    return [''.join(list(map(lambda x: '#' if x == '1' else ' ', list(str(bin(i | j)[2:]).zfill(n))))) for i, j in zip(arr1, arr2)]
    #     res = ''.join(list(map(lambda x: '#' if x == '1' else ' ', list(str(bin(i | j)[2:]).zfill(n)))))
    #     answer.append(res)
    # return answer
