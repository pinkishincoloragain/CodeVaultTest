def solution(s):
    flag = True
    res = ""
    
    for i in range(0, len(s)):
        cur = s[i]
        
        if flag == True:
            cur = cur.upper()
            flag = False
            print(cur)
        
        else: 
            cur = cur.lower()
            flag = False
        
        if cur == " ":
            flag = True
        
        res += cur
    
    return res
    