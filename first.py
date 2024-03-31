num= int (input("enter a number:"))
if num % 5 == 0:
    print(num, "is divisible by 5")
else:
    print(num,"is not divisble by 5")



num = int(input("Enter a number of rows: "))

for i in range(num):  # Outer loop for rows
    for j in range(num):  # Inner loop for columns
        print("*", end=" ")  # Printing asterisks horizontally with a space
    print()  # Moving to the next line after printing a row

num = int(input("Enter the number of rows for the triangle: "))

for i in range(1, num + 1):  # Outer loop for rows
    for j in range(1, i + 1):  # Inner loop for columns
        print("*", end=" ")  # Printing asterisks horizontally with a space
    print()  # Moving to the next line after printing a row


num = int(input("Enter the number of rows for the reverse triangle: "))

for i in range(num, 0, -1):  # Outer loop for rows in reverse order
    for j in range(1, i + 1):  # Inner loop for columns
        print("*", end=" ")  # Printing asterisks horizontally with a space
    print()  # Moving to the next line after printing a row


num = int(input("Enter the number of rows for the right-sided triangle: "))

for i in range(1, num + 1):  # Outer loop for rows
    # Print spaces to align asterisks to the right
    print(" " * (num - i), end="")
    # Print asterisks for the current row
    print("*" * i)


num = int(input("Enter the number of rows for the star pattern: "))

for i in range(1, num + 1):  # Outer loop for rows
    # Printing spaces before the stars to center-align
    print(" " * (num - i), end="")
    # Printing stars for the current row
    print("* " * i)

for i in range(num - 1, 0, -1):  # Outer loop for rows in reverse order
    # Printing spaces before the stars to center-align
    print(" " * (num - i), end="")
    # Printing stars for the current row
    print("* " * i)
