def solution(s):
    res = []
    for temp in s.split(" "):
        res.append(''.join(list(temp[i].upper() if i % 2 == 0 else temp[i].lower() for i in range(0, len(temp)))))
    return " ".join(res)