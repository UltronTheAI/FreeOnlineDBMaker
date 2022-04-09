file = input('file >>> ')

f = open(file, 'w')
f.write(input('text >>> \n\n'))
f.close()
print ('\n\nExit.')
