---
title: How to use Proxies in JavaScript
date: 2020-02-19
draft: true

collection: How To
category: JavaScript

featuredImage:
  sourceUrl: https://images.unsplash.com/photo-1517255666489-db1d2c54d083
  sourceName: Unsplash
  creditUrl: https://unsplash.com/@fbazanegue
  creditName: Fabien Bazanegue
---

## Background

Proxies were introduced as part of the ES2015 update and were one of the first forms of meta-programming in JavaScript. They were a great addition to the language, but due to limitations of ES5 they couldn't be transpiled or polyfilled for safe use at the time.

They were the forbidden fruit in our Garden of Eden, and not even our slippery friend Babel could tempt us to take a bite.

Unfortunately this meant that by and large they went quietly unnoticed, and it's not been until recently that they've emerged into our codebases spreading both joy and confusion in equal measures.

By the way, if you're not familar with the syntax or terminology of a Proxy object, go ahead and checkout the [reference on MDN][1.1].

[1.1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy

## Applications

We’ll get going with some basic, borderline useful examples before collapsing into the unpredictable madness that meta-programming often encourages from even the most responsible among us.

### Validating properties — a passable use case

Whilst this isn't something we should generally do in our day to day (throwing errors outside of directly executed functions isn't ideal practice), it still makes for a great first example.

`embed:snippets/property-validation.js`

Here we've created a `set` trap to ensure that when an attempt is made to assign a new value to the `sides` property, that the value is greater than 0.

### Property defaults — misleading but perhaps helpful

Null coalescing is great, but who has the time to type all of those `??`! I jest, although a Proxy can certainly make life a little easier with this clever trick.

`embed:snippets/default-properties.js`

I could see numeric tabular data benefiting from this in scenarios where a default base value is required, but who am I to make assumptions.

### Freezing objects — reinventing the wheel at best

Sure, `Object.freeze` is deffinitely the better way to go, but if you're after a fun alternative then go ahead and sample this little gem.

`embed:snippets/protected-properties.js`

It’s worth noting that this proxy has a second hidden feature... if you maintain a reference to the original object then you can continue to make changes to it. The proxy object is acting like a sort of guard in this instance, allowing reads to the source object whilst blocking unwanted writes.

### Hoisting methods — downright silly

This trick will work for any instance method with the signature `K in PropertyKey => Any`, and will likely play havoc with your colleagues heads. Not that I’m endorsing this being used in _any_ situation.

### Building a website — HR have been notified



## Tips and tricks

Return true is needed in "use strict" mode.
