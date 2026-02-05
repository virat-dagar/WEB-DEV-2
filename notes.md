# DOM Selection Methods in JavaScript

## HTMLCollection vs NodeList

This README explains how different DOM selection methods in JavaScript work and the type of collections they return.

---

## HTMLCollection

### Returned by
- `getElementById()`
- `getElementsByClassName()`
- `getElementsByTagName()`

### Characteristics
- Returns an **HTMLCollection**
- **Array-like**, but **not a real array**
- **Live collection** (automatically updates when the DOM changes)
- Elements can be accessed using **index**
- Does **not** support `forEach()` directly
- Best iterated using a **for loop**

### Example
```js
const elements = document.getElementsByClassName("item");

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}
```

---

## NodeList

### Returned by
- `querySelector()` → returns a single element
- `querySelectorAll()` → returns a NodeList

### Characteristics
- **Array-like**, but **not a real array**
- **Usually static** (does not auto-update when the DOM changes)
- **Supports `forEach()`** method
- Can also be iterated using a **for loop**

### Example
```js
const nodes = document.querySelectorAll(".item");

nodes.forEach(element => {
    console.log(element);
});
```

---

## Comparison Table

| Feature        | HTMLCollection          | NodeList            |
|---------------|-------------------------|---------------------|
| Returned by   | `getElements*` methods  | `querySelectorAll`  |
| Live          | Yes                     | Usually No          |
| Index access  | Yes                     | Yes                 |
| for loop      | Yes                     | Yes                 |
| forEach       | No                      | Yes                 |
| Real Array    | No                      | No                  |

---

## Quick Memory Trick
- `getElements*` → **HTMLCollection** → use **for loop**
- `querySelectorAll` → **NodeList** → use **forEach**

---

## Notes

Both **HTMLCollection** and **NodeList** can be converted into real arrays when required:

```js
Array.from(collection);
```

This allows the use of array methods such as `map()`, `filter()`, and `reduce()`.

---

## Author

Written as clean reference notes for learning, revision, and practical JavaScript usage.