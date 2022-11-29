import math

# N = int(input("N = "))
# s = 0
# for i in range(1,N):
#     if (i%3==0):
#         s=s+1
#         print(i)
# print(s)

# import math
# x = int(input("a = "))
# y = int(input("y = "))
# S=0
# for a in range(1,x+1):
#     S =S+(a**2+2*a)/(a**3+a*math.cos(a)**2+1)
# print('%.2f'%S)


# Q=0
# for i in range(1,y+1):
#     Q =Q+(i ** 2 + 1) / (i ** 3 / i + 2)
#  print('%.2f'%Q)


#
# for i in range(1, 31):
#     if i == 17:
#         continue
#     print(i, "Ikki baho")

# s = " "
# for i in range(1, 31):
#     if i == 17:
#         s='\n'
#     print(i, end = s)
#

# for i in range(1, 31):
#     if i < 17:
#         print(i, end = " ")
#     else:
#         print(i, end = '\n')

# r4 = a % 10
# a //= 10
# r3 = a % 10
# a //= 10
# r2 = a % 10
# a //= 10
# r1 = a % 10
# a //=10
# print("A = ",a)
# print(r1,r2,r3)


# a=int(input("a = "))
# s = 0
# while a != 0:
#     s += a % 10
#     a //= 10
# print("S =", s)

#
# n = int(input("n = "))
# m = int(input("m = "))
# a = math.factorial(n)
# b = math.factorial(m)
# s= a+b
# print("n! + m! =",s)

# n = int(input("n = "))
# s = 1
# while n != 0:
#     s = n%2
# print(s)

# n = int(input("fibonachi son kiriting = "))
# k = int(input("fibonachining ketma-ketligini kiriting = "))
# a= 1
# b= 1
# d= 0
# print(a,'\n',b)
# for i in range(k):
#     c=a+b
#     a=b
#     b=c
#     d += 1
#     if n==k:
#        break
# print(d+2)
# e = int(input("e = "))
# a1= 2


# a = 'salom,hayr,fff,'
# b=a.split(",")
# print(b)
# print(b)


#  satrlar

# a = 'olma anor olcha banan uzum gilos ananas tarvuz'
# b = a.split(" ")
# min = len(b)
# s = ""
# for i in range(len(b)):
#     if len(b[i]) <= min:
#         min = len(b[i])
#         s = b[i]
# print(s)


# S1 = ["olma", "anor", "uzum","olcha","behi","o`rik"]
# S2 = ["olma", "anor", "mandarin","olcha","behi","malina"]
# d = 0
# for i in S1:
#     for j in S2:
#         if j in i:
#             S2.remove(j)
#             d+=1
# print(d)
# print(S2)


# a = int(input("Butun son kiriting: "))
# s = 1
# for i in range(0,a+1):
#     s=i**2
#     print(i,"Sonning kvadrati",s,"ga teng")




# a = int(input("Son kiriting: "))
# s = 0
# for i in range(1,a+1):
#     s=(a+1)-i
#     print("*"*s)


# a = int(input("son kiriting ="))
# s =0
# for i in range(2,a+1):
#     s = a/i
#     print(s)


# n = int(input("son kiriting:"))
# for i in range(1,11):
#     print(f"{n} x {i} = {n*i}")

# birlar_to_word ={
#     1:"Bir",
#     2:"Ikki",
#     3:"Uch",
#     4:"To`rt",
#     5:"Besh",
#     6:"Olti",
#     7:"Yetti",
#     8:"Sakkiz,",
#     9:"to`qqiz",
# }
# onlar_to_word ={
#     1:"O`n",
#     2:"Yigirma",
#     3:"O`ttiz",
#     4:"Qirq",
#     5:"Ellik",
#     6:"Oltmish",
#     7:"Yetmish",
#     8:"Sakson,",
#     9:"To`qson",
# }
# n = int(input("son kiriting:"))
# ikkinchi = n % 10
# n //= 10
# if n !=0;
#     print(onlar_to_word[n], end = "")
# if ikkinchi !=0:
#     print(birlar_to_word)


# n = input("satr kiriting ")
#
# for i in n:
#     if 95 <= ord(i) <= 125:
#     print(i.upper())