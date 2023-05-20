import pyttsx3, PyPDF2
pdfreader = PyPDF2.PdfFileReader(open('book.pdf', 'rb'))
speaker = pyttsx3.init()
for page_num in range(pdfreader.numPages):
    text = pdfreader.getPage(page_num).extractText()
    cleanedText = text.strip().replace('\n', ' ')
    print(cleanedText)
speaker.save_to_file(cleanedText, 'text_to_speach.mp3')
speaker.runAndWait()
speaker.stop()