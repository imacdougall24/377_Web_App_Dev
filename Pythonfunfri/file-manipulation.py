import os
import shutil

def rename():
    path = input('Enter the path: ')
    prefix = input('Enter the file name prefix: ')
    i = 1
    files = os.listdir(path)
    files.sort()
    for filename in files:
        extension = filename.split(".")[1].lower()
        source = path + filename
        destination = path + prefix + '-' + str(i) + "." + extension 
        os.rename(source, destination)
        i += 1



def copy_file():
    original ='C:/Users/acer/Desktop/pyFunFri/frog3.jpg'
    filename, extension = original.split('.')
    
    numCopies = int(input('Enter how many copies you want: '))
    for i in range(numCopies):
        copy_filename = filename + '_Copy' + str(i+1) + '.' + extension
        shutil.copyfile(original, copy_filename)

    
# rename()
copy_file()