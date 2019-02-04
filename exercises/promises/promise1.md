## setTimeout

Existe una salida dada que será 1 3 4 2. El cliente se pregunta por qué el 4 se registra antes del 2. La razón de esto es que aunque la línea 2 comenzó a ejecutarse antes de la línea 4, no comenzó a ejecutarse durante 3.000 ms y por lo tanto se registra 4 antes de 2 .

El cliente ha decidido usar promises para resolver este problema y que por pantalla salga 1, 2, 3 y 4.
