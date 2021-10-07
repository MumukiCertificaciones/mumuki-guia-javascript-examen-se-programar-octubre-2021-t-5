Ahora vamos a hacer una función un poco particular. :exploding_head:

Queremos crear un mezclador de palabras que reciba 2 palabras y un número. Si el número es menor o igual a 5 el mezclador concatena la primera palabra con la segunda. En cambio, si el número es mayor a 5, concantena la segunda con la primera:

``` javascript
ム $funcionParaMezclar("mate", "pato", 3)
"matepato"

ム $funcionParaMezclar("ruido", "verde", 5)
"ruidoverde"

ム $funcionParaMezclar("tronco", "perro", 8)
"perrotronco"
```

> Definí la función `$funcionParaMezclar`.