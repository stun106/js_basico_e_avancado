/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

//&& - todas as expressões precisam ser verdadeiras para retornar True
const and = true && true && true && true;
console.log(and);
//|| - se uma expressão retornar verdadeiro toda a expressão retornará True
const or = false || false || false || true;
console.log(or);
//! - nega a expressão
const not = ! true;
console.log(not);

