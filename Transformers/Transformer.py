from tkinter import *
from tkinter import filedialog
from transformers import pipeline, AutoTokenizer, AutoModelForQuestionAnswering
from zipfile import ZipFile

import json

def open_file():
    # Abrir ventana para seleccionar archivo zip
    global context
    file_path = filedialog.askopenfilename(title="Seleccionar archivo zip", filetypes=[("Archivos ZIP", "*.zip")])
    
    # Leer archivo zip
    with ZipFile(file_path, 'r') as zip:
        # Leer primer archivo json en el zip
        filename = zip.namelist()[0]
        with zip.open(filename) as json_file:
            # Leer json y obtener texto del campo "text"
            data = json.load(json_file)
            context = data['text']

# Función que se llama al presionar el botón
def responder_pregunta():
    # Obtener la pregunta ingresada en la caja de texto
    pregunta = caja_texto.get()

    # Cargar modelo y tokenizer de BERT en español
    tokenizer = AutoTokenizer.from_pretrained("dccuchile/bert-base-spanish-wwm-cased")
    model = AutoModelForQuestionAnswering.from_pretrained("mrm8488/bert-base-spanish-wwm-cased-finetuned-spa-squad2-es")

    # Crear pipeline de pregunta y respuesta
    qa_pipeline = pipeline(
        "question-answering",
        model=model,
        tokenizer=tokenizer
    )

    # Obtener respuesta
    respuesta = qa_pipeline(question=pregunta, context=context)

    # Mostrar respuesta en la etiqueta de texto
    etiqueta_respuesta.config(text=respuesta['answer'])

context = ""
# Crear ventana de tkinter
ventana = Tk()
ventana.title("Preguntas y Respuestas")
ventana.geometry("500x300")

file_button = Button(text="Seleccionar archivo zip", command=open_file)
file_button.pack(pady=10)

# Crear caja de texto para la pregunta
caja_texto = Entry(ventana)
caja_texto.pack()

# Crear botón de responder
boton_responder = Button(ventana, text="Responder", command=responder_pregunta)
boton_responder.pack()

# Crear etiqueta de texto para la respuesta
etiqueta_respuesta = Label(ventana, text="")
etiqueta_respuesta.pack()

# Iniciar loop principal de la ventana de tkinter
ventana.mainloop()