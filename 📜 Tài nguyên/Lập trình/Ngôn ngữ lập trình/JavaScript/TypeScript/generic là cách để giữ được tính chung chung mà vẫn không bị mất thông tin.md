---
share: True
---
To start off, let’s do the “hello world” of generics: the identity function. The identity function is a function that will return back whatever is passed in. You can think of this in a similar way to the `echo` command.

Without generics, we would either have to give the identity function a specific type:

`   function identity(arg: number): number {    return arg;  }   `[Try](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABDAJgUzLKBPAFAQwCcBzALkTBAFsAjNQgSnMtvsQG8AoRRQtKEISRFiAbk4BfIA)

Or, we could describe the identity function using the `any` type:

`   function identity(arg: any): any {    return arg;  }   `[Try](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABDAJgUzLKBPAFAQwCcBzALkXzGwEpzLtEBvAKEUULShEKSOIG5mAXyA)

While using `any` is certainly generic in that it will cause the function to accept any and all types for the type of `arg`, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a _type variable_, a special kind of variable that works on types rather than values.

`   function identity<Type>(arg: Type): Type {    return arg;  }   `[Try](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABDAJgUzLKBPAPAFWwAc0A+ACgEMAnAcwC5FCSBKR5tRAbwChFFqaKCGpIatANw8AvkA)

We’ve now added a type variable `Type` to the identity function. This `Type` allows us to capture the type the user provides (e.g. `number`), so that we can use that information later. Here, we use `Type` again as the return type. On inspection, we can now see the same type is used for the argument and the return type. This allows us to traffic that type information in one side of the function and out the other.

We say that this version of the `identity` function is generic, as it works over a range of types. Unlike using `any`, it’s also just as precise (i.e., it doesn’t lose any information) as the first `identity` function that used numbers for the argument and return type.

Nguồn:: [TypeScript: Documentation - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
[[generic là biến dành cho kiểu]] 