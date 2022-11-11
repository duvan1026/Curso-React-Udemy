## Curso de React

Este es un repositorio sobre los ejercicios y actividades realizadas en el aprendizaje de react del curso "REACT: De cero a expero (HOOKS y MERN)" de Fernando Herrera.

### Introducción a las pruebas unitarias y de integración.

#### ¿Que son las pruebas? 

"No son una perdida de tiempo", son pruebas realizadas para verificar el correcto funcionamiento del aplicativo o actividad a realizar.

#### Tipos de pruebas: 

1. Unitarias 

Son pruebas Enfocadas en pequeñas funcionalidades.

2. De integración

Son pruebas enfocadas en cómo reaccionan varias piezas en conjunto.

#### Caracteristicas de las pruebas

1. Faciles de escribir.
2. Fáciles de leer.
3. confiables.
4. Rápidas.
5. Principalmente unitarias.

### AAA

#### Arrange ( Arreglar ).   

Es el paso en el cual se establece el estado inicial, usualmente se conoce como el sujeto a probar. Normalmente se realizan las siguientes actividades:

1. inicializamos variables.
2. Importaciones necesarias.
3. Preparación del ambiente a probar.

#### Act (Actuar).

En este paso se aplican acciones o estímulos al sujeto de pruebas, en este paso se realizan las siguientes actividades:

1. Llamar métodos.
2. Simular clicks.
3. Realizar acciones sobre el paso anterior.

#### Assert (Afirmar).

En este paso se observa el comportamiento resultante, es decir:

1. Se observa si los resultados son los esperados.
2. Ejemplo: Que algo cambie, algo incremente o bien que nada suceda.

### MITOS DE LAS PRUEBAS

1. Hacen que mi aplicación no tenga errores.--- No es verdad, ya que las pruebas son escritas por programadores, que son humanos por enden los humanos nos equivocamos.
2. Las pruebas no pueden fallar.---No es verdad, ya que se pueden hacer pruebas que arrojen falsos positovs o falsos negativos, puede que algo funcione para la prueva no y viseversa.
3. hacen más lenta mi aplicación. ---No es verdad, porque las pruebas corren sobre la maquina de desarrollo, por lo tanto son locales y no llegan a la etapa de desarrollo.
4. Es una pérdida de tiempo. --pueden ser verdad, depende si se hacen pruebas de cosas que no tienen sentido probar, como las librerias, las cuales ya posiblemente el autor ya ha realizado dichas pruebas.
5. hay que probar todo. ---puede ser verdad,  si se prueba todo, posiblemente lleve el mismo tiempo o mas del tiempo que nos tomo crear nuestra aplicación. 