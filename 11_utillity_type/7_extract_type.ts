/**
 * Extract Type: 추출
 */

type NoString = Extract<string | boolean | number, string>
type NoFunction =Extract<string | (()=>void),Function>