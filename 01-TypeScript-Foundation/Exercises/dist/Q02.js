"use strict";
/* Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?” */
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "٘Muhammad";
console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);
/*
Template literals in TypeScript are a powerful feature that builds on string literal types and allows for the creation of many strings via unions. They have the same syntax as template literal strings in JavaScript, but are used in type positions.

When used with concrete literal types, a template literal produces a new string literal type by concatenating the contents. For example:
```typescript
type World = "world";
type Greeting = `hello ${World}`;
// type Greeting = "hello world"
```
When a union is used in the interpolated position, the type is the set of every possible string literal that could be represented by each union member. For example:
```typescript
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
```
For each interpolated position in the template literal, the unions are cross multiplied¹. For example:
```typescript
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
// type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"
```
This feature is generally recommended for use in smaller cases, and for larger string unions, ahead-of-time generation is advised.

*/ 
//# sourceMappingURL=Q02.js.map