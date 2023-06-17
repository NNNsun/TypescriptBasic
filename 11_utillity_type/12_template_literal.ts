/**
 * Template Literal
 */

type CodeFactory = 'Code Factory'

// UpperCase
type CodeFactoryUpper = Uppercase<CodeFactory>

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>

// Capitalize
type CodeFactoryCapital = Capitalize<CodeFactoryLower>

// Uncapitalize

type CodeFactoryUncapital = Uncapitalize<CodeFactoryCapital>
