//Que tipo de valor es verdadero y que tipo de valor es falso
//Truthy and Falsy
//Nosotros vamos a usar esto cuando empecemos a generar condiciones en JavaScript, cuando hagamos ciertas funciones que tenga que validar, si algo es verdadero o falso para hacer cierta acción.
//Pero primero antes de poder aprender a hacer condicionales, tenemos que entender que valores por default son falsos y que valores por default son verdaderos.

Boolean(); //false
Boolean(0); //false
Boolean(null);  //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean("");  //false

Boolean("a"); //true
Boolean(1); //true
Boolean([]);  //true
Boolean({});  //true
Boolean(" ")  //true
Boolean(function(){});  //true
Boolean(true);  //true
Boolean(-1) //true cualquier que sea negativo es true





//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también




//Truthy
//En JavaScript, un valor verdadero es un valor que se considera  true/verdadero cuando es evaluado en un contexto Booleano. Todos los valores son verdaderos a menos que se definan como falso (es decir, excepto false, 0, "", null, undefined, y NaN).

//JavaScript usa coerción (en-US) en los contextos Booleanos.

//Ejemplos de valores verdaderos en JavaScript (los cuales se traducirán a verdaderos y por lo tanto ejecutarán el bloque condicional if):

if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity);



