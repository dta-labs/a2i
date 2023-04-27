from transformers import pipeline, AutoTokenizer, AutoModelForQuestionAnswering
import tkinter as tk

# Cargar modelo y tokenizer de BERT en español
tokenizer = AutoTokenizer.from_pretrained("dccuchile/bert-base-spanish-wwm-cased")
model = AutoModelForQuestionAnswering.from_pretrained("mrm8488/bert-base-spanish-wwm-cased-finetuned-spa-squad2-es")

# Definir context

# Definir pregunta
def responder_pregunta():
    pregunta = entrada.get()

    #context = "Mario Bros. (マリオブラザーズ Mario Burazāzu, lit. Hermanos Mario) es un videojuego de arcade desarrollado por Nintendo en el año 1983. Fue creado por Shigeru Miyamoto. Ha sido presentado como un minijuego en la serie de Super Mario Advance y otros juegos. Mario Bros. ha sido relanzado para Wii, Nintendo 3DS y Wii U en los servicios de Consola Virtual en Japón, Norteamérica, Europa y Australia. Fue la tercera aparición de Mario, y la primera que aparece con su nombre definitivo, ya que en Donkey Kong (1981) aparecía bajo el seudónimo de Jumpman (‘saltador’). En el juego, Mario es retratado como un fontanero ítalo-estadounidense que, junto con su hermano menor Luigi, tiene que derrotar a las criaturas que han venido de las alcantarillas de Nueva York. El juego se centra en la exterminación de estas, volteándolas sobre sus espaldas y pateándolas. Las versiones originales de Mario Bros. —la versión de arcade y la versión de Family Computer/Nintendo Entertainment System (FC/NES)— fueron recibidas positivamente por los críticos. Aunque este juego fue considerado como el primer juego en hacer debutar al personaje de Luigi, en realidad este apareció meses antes en el juego Mario Bros. de Game & Watch del mismo año. Mario Bros. fue creado por Shigeru Miyamoto (1952-) y Mitsuharo Sato con una historia creada también por Shigeru Miyamoto, principales desarrolladores del videojuego Donkey Kong. En Donkey Kong, Gunpei Yokoi sugirió a Miyamoto que debería ser capaz de caer de cualquier altura, algo de lo que Miyamoto no estaba seguro, pensando que sería poco propio de un juego. Se pusieron de acuerdo, pensando que estaría bien para él tener algunas habilidades sobrehumanas. Él diseñó un prototipo en el que Mario saltaba y rebotaba, que lo hizo quedar satisfecho. El elemento de la lucha contra los enemigos de abajo se introdujo después de que Yokoi lo sugiriera, observando que sería mucho trabajo ya que había varios pisos. Sin embargo, resultó ser demasiado fácil eliminar a los enemigos de esta manera, así que los desarrolladores exigieron a los jugadores tocar (patear) a los enemigos después de haber golpeado la plataforma bajo ellos para derrotarlos. Esta fue también la forma en que se presentó a la tortuga como un enemigo, la cual se concibe como un rival que solo podía ser golpeada desde abajo. Debido a la aparición de Mario en Donkey Kong, con un mono, un sombrero y un bigote grueso, Shigeru Miyamoto pensó que debía ser un fontanero en lugar de un carpintero, y diseñó este videojuego para reflejar eso.​ Otro factor que contribuyó fue el escenario del juego: se trataba de una gran red de tuberías gigantescas, por lo que se consideró que un cambio de ocupación era necesario."
    file_path = "C:/Users/iisaa/Desktop/WorkPlace/Agricultura.txt"
    with open(file_path, "r", encoding='utf-8') as file:
        context = file.read()

    # Crear pipeline de pregunta y respuesta
    qa_pipeline = pipeline(
        "question-answering",
        model=model,
        tokenizer=tokenizer
    )

    respuesta = qa_pipeline(question=pregunta, context=context)
    # Mostrar respuesta en la etiqueta
    etiqueta.config(text=respuesta['answer'])

# Crear ventana
ventana = tk.Tk()

# Crear etiqueta con instrucciones
instrucciones = tk.Label(ventana, text="Escriba su pregunta:")
instrucciones.pack()

# Crear caja de entrada
entrada = tk.Entry(ventana)
entrada.pack()

# Crear botón para responder pregunta
boton_responder = tk.Button(ventana, text="Responder", command=responder_pregunta)
boton_responder.pack()

# Crear etiqueta para mostrar respuesta
etiqueta = tk.Label(ventana, text="")
etiqueta.pack()

# Ejecutar ventana
ventana.mainloop()