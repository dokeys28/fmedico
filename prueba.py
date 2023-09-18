  

from pydantic import BaseModel


class Usuario(BaseModel):
    nombre: str
    edad: str

x = {'nombre': 'Luis', 'edad': "25"}


a = Usuario(**x)

print(a.edad)