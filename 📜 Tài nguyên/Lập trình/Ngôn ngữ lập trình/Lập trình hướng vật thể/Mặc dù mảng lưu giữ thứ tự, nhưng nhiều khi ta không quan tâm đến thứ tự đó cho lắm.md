---
share: True
---
Along with all the above technical differences, I think there is a fundamental difference in the purpose and meaning of an Object and an Array.

1. The properties of an object **DESCRIBE/DEFINE** the object whereas
2. The elements of an array do **NOT DESCRIBE/DEFINE** the array, on the contrary the array defines what it's contents are. Do note - I am not talking about technical aspects. You can have any combinations technically but semantically each has its own purpose.

- For example a card holder. Each card does **NOT DESCRIBE/DEFINE** the card-holder. But the card holder does define it's purpose - that it holds only cards.
    
- An Object is used to represent an entity and its properties **DESCRIBE/DEFINE** the entity. Take the same example of a Card. A card has properties like color, number which **DESCRIBE/DEFINE** what the card is.
    

For your above example:

1. Each object which represents a person **is defined by the properties** `id`, `firstName` and `lastName`.
    
2. A list of these persons cannot be an object of objects because **each id does not describe the object of objects**. So
    

```javascript
"users":[
    {
        "id":"id",
        "key2":"value2",
        "key3":"value3"
    },
    {
        "id":"id",
        "key2":"value2",
        "key3":"value3"
    }
]
```

is a better representation than

```javascript
"users": {
    "id1": {
        "id": "id1",
        "firstname": "firstname1",
        "lastname": "lastname1"
    },
    "id2": {
        "id": "id2",
        "firstaame": "firstname2",
        "lastname": "lastname2"
    }
}
```

even though technically you can use either. I hope I was able to convey(put into words) my thinking in the right manner.
Nguồn:: [[⚡Hiểu biết sâu/Ξ Nguồn/Stack Overflow]], [Array of objects vs Object of Objects](https://stackoverflow.com/a/53216882/3416774)

