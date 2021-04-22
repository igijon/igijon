---
icon: class
title: PlantUML
author: Inma Gijón
time: 2021-04-21
category: Desarrollo
tag:
  - Desarrollo
  - SGE
  - PlantUML
  - UML
footer: PlantUML
star: true
article: true
comment: false
---

## ¿Qué es?

<p style="text-align:center;">
  <img src="/assets/img/desarrollo/plantuml.png" width=40%/>
</p>

[PlantUML](https://plantuml.com/es/) permite generar múltiples tipos de diagramas a partir de código muy fácil e intuitivo. En clase principalmente lo utilizamos para **diagramas de clases**, pero soporta mútiples tipos de diagramas: secuencia, casos de uso, clases, objetos, actividades, componentes, despliegue, estados... incluso algunos diagramas **no-UML** como: JSON data, YAML data, Gantt...

<!-- more -->

En su sitio [web](https://plantuml.com/es/) tienes múltiples ejemplos y un **editor online** que te da la opción de hacer pruebas, familiarizarte con la sintaxis...

Además está perfectamente integrado con la mayor parte de IDES como [Visual Studio Code](https://code.visualstudio.com/) o los entornos de [JetBrains](https://www.jetbrains.com/es-es/).

## :computer: Ejemplo con integración en [PyCharm](https://www.jetbrains.com/es-es/pycharm/)

En el módulo de [Sistemas de Gestión Empresarial](/modulos/sge/), ya que programamos en Python, lo tenemos integrado en [PyCharm](https://www.jetbrains.com/es-es/pycharm/), como plugin como podéis ver en la siguiente imagen.

<p style="text-align:center;">
  <img src="/assets/img/desarrollo/plantuml2.jpg" width=100%/>
</p>

Con este plugin, simplemente al crear dentro del directorio del proyecto un fichero con extensión **.puml**, éste será interpretado y se generará automáticamente el diagrama correspondiente como se puede ver en la captura anterior.

El código necesario para la generación del diagrama del ejemplo lo podéis ver a continuación (lo vemos por partes pero todo formaría parte del mismo fichero **.puml**):

```PlantUML

@startuml

Persona <|-- Alumno
Persona <|-- Profesor
Aula "1" o-- "0..*" Alumno
Aula "1" o-- "0..*" Profesor
Aula "1" o-- "0..*" Asignatura
Asignatura "0..*" <-- "1" Alumno : se_matricula
Asignatura "0..*" <-- "1" Profesor: imparte

```
Aquí establecemos las relaciones entre las distintas clases del diagrama.

```
class Aula {
   - str codigo
   + add_asignatura(a: Asignatura)
   + asignatura_en_curso(a: Asignatura): Boolean
   + remove_asignatura(a: Asignatura)
   + get_asignatura(a: Asignatura): Asignatura
   + add_alumno(a: Alumno)
   + esta_alumno_en_curso(a: Alumno): Boolean
   + remove_alumno(a: Alumno)
   + add_profesor(p: Profesor)
   + esta_profesor_en_curso(p: Profesor): Boolean
   + remove_profesor(p: Profesor)
   + get_profesor(p: Profesor): Profesor
   + to_dictionary(): Dictionary
}

class Asignatura {
   - str codigo
   - str nombre
   + to_dictionary(): Dictionary
}

class Persona {
   - str dni
   - str nombre
   - Date fecha_nacimiento
   + to_dictionary(): Dictionary
}

class Alumno {
    + matricular_asignatura(a: Asignatura)
    + esta_asignatura_matricula(a: Asignatura): Boolean
    + remove_asignatura(a: Asignatura)
    + to_dictionary(): Dictionary
}

class Profesor {
   - Date fecha_incorporacion
   + to_dictionary(): Dictionary
}

```

Aquí podemos ver las propiedades y métodos de las distintas clases.

```
note as N1
    Los getters y setters son omitidos
    por claridad en el código.
    Tampoco añadimos los métodos equals y toString
end note

@enduml
```

Finalmente podemos añadir notas con información, como por ejemplo la que tenemos aquí. 

