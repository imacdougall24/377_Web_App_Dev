import os

def rename_photos():
    path = "C:/Users/acer/Desktop/pythonFunFri"
    prefix = "frog"
    i = 1

    for filename in os.listdir(path):
        extension = filename.split(".")[1].lower()
        
        if extension in ["img", "png", "jpg", "gif", "bmp", "svg"]:
            print(filename)
            
            source = path + "/" + filename
            destination = path + "/" + prefix + str(i) + "." + extension 

            os.rename(source, destination)
            i += 1


rename_photos()