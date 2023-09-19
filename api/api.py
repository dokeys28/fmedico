from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(CORSMiddleware,
                   allow_origins= ['*'],
                   allow_credentials= True,
                   allow_methods= ['*'], 
                   allow_headers= ['*'])

listado_de_pacientes = []

class Paciente(BaseModel):
    nombre:str
    edad:str
    sexo:str
    cedula:str
    residencia:str
    ap:str
    af:str
    ahf:str
    atq:str
    agog:str
    agop:str
    agoc:str
    agoa:str
    mdc:str
    hea:str
    rscabeza:str
    rscuello:str
    rstorax:str
    rsabdomen:str
    rsgenitales:str
    rsextremidades:str
    efcabeza:str
    efcuello:str
    eftorax:str
    efabdomen:str
    efgenitales:str
    efextremidades:str
    ec:str
    dx:str
    comentarios:str
    plan:str
    id:int

@app.post('/guardar')
def guardar(paciente: Paciente):
    px = Paciente(**paciente)
    listado_de_pacientes.append(px)
    return "Paciente guardado"

@app.get('/')
def home():
    return "Listado de pacientes by Dokeys"

@app.get('/pacientes')
def pacientes():
    return listado_de_pacientes

@app.get('/pacientes/{n}')
def paciente(n: int):
    return listado_de_pacientes[n]

@app.get('/total')
def total():
    return len(listado_de_pacientes)



