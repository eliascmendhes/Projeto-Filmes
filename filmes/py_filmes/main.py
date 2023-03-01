import tkinter as tk
import requests

def cadastrar_filme():
    titulo = titulo_entry.get()
    diretor = diretor_entry.get()
    genero = genero_entry.get()
    data = {'titulo': titulo, 'diretor': diretor, 'genero': genero}
    response = requests.post('http://localhost:3000/filmes', json=data)
    if response.status_code == 201:
        resultado_label.config(text="Filme cadastrado com sucesso.")
    else:
        resultado_label.config(text="Erro ao cadastrar filme.")

root = tk.Tk()
root.title("Cadastro de Filmes")

titulo_label = tk.Label(root, text="Título:")
titulo_label.grid(row=0, column=0, padx=10, pady=10)

titulo_entry = tk.Entry(root)
titulo_entry.grid(row=0, column=1, padx=10, pady=10)

diretor_label = tk.Label(root, text="Diretor:")
diretor_label.grid(row=1, column=0, padx=10, pady=10)

diretor_entry = tk.Entry(root)
diretor_entry.grid(row=1, column=1, padx=10, pady=10)

genero_label = tk.Label(root, text="Gênero:")
genero_label.grid(row=2, column=0, padx=10, pady=10)

genero_entry = tk.Entry(root)
genero_entry.grid(row=2, column=1, padx=10, pady=10)

cadastrar_button = tk.Button(root, text="Cadastrar Filme", command=cadastrar_filme)
cadastrar_button.grid(row=3, column=0, columnspan=2, padx=10, pady=10)

resultado_label = tk.Label(root, text="")
resultado_label.grid(row=4, column=0, columnspan=2, padx=10, pady=10)

root.mainloop()
