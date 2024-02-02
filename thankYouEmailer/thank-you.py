import smtplib
from email.message import EmailMessage

file = open('thankYouEmailer\gifts.csv', 'r')
lines = file.readlines()

for line in lines:
    line = line.strip()
    name, gift, email = line.split(',')

    subject = "Thank You for the Gift"
    message = "Thank you " + name + " for the " + gift + ", it was very thoughtful of you. Happy New Year."
    
    print(message)

    msg = EmailMessage()
    msg.set_content(message)
    msg["Subject"] = subject
    msg["From"] = "imacdougall24@hanoverstudents.org"
    msg["To"] = email

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        print("Authenticating...")
        server.login("ian.macd0gall@gmail.com", "APP SPECIFIC PASSWORD")
        print("Sending...")
        server.send_message(msg)
        server.quit()
        print("Message Sent!")