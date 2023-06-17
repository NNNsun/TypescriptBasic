/**
 * Exclude Type: 특정타입을 제외해라
 */

type NoString = Exclude<string | boolean | number, string>
type NoFunction =Exclude<string | (()=>void),Function>