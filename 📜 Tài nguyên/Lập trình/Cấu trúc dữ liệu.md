---
share: True
---
<sub>(This question is a continuation of [my previous question](https://softwareengineering.stackexchange.com/q/446480/192731))</sub>

I notice that there are various ways to structure data:
- Array of individual arrays
- Array of dimensional arrays
- Array of individual objects
- Object of individual objects
- Object of individual arrays
- Array of individual objects of one array

```js
array_of_individual_arrays = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];

array_of_dimensional_arrays = [
    [ 'John Doe', 'Jane Doe', 'Petr Chess', 'Ling Jess', 'Ben Liard' ],
    [ 20        , 10        , 5           , 28         , 16          ],
    [ 60        , 52        , 24          , 43         , 51          ],
    [ 'A'       , 'B'       , 'F'         , 'A'        , B           ]
] 

array_of_individual_objects = [
    {
        'name': 'John Doe',
        'score1': '20',
        'score2': '60'
    },
    {
        'name': 'Jane Doe',
        'score1': '10',
        'score2': '52'
    }
]

object_of_individual_objects = {
    'John Doe': {
        'score1': '20',
        'score2': '60'
    },
    'Jane Doe': {
        'score1': '10',
        'score2': '52'
    }
}

object_of_individual_arrays = {
    'John Doe': [20, 60, 'A'],
    'Jane Doe': [10, 52, 'B'],
    'Petr Chess': [5, 24, 'F'],
    'Ling Jess': [28, 43, 'A'],
    'Ben Liard': [16, 51, 'B']
}

array_of_individual_objects_of_one_array = [
   {'John Doe': [20, 60, 'A']},
   {'Jane Doe': [10, 52, 'B']},
   {'Petr Chess': [5, 24, 'F']},
   {'Ling Jess': [28, 43, 'A']},
   {'Ben Liard': [16, 51, 'B']}
]
```

This is my comparison:

| Criteria                                            | Array of individual arrays | Array of dimensional arrays | Array of individual objects | Object of individual objects | Object of individual arrays | Array of individual objects of one array |
| --------------------------------------------------- | -------------------------- | --------------------------- | --------------------------- | ---------------------------- | --------------------------- | ---------------------------------------- |
| Comprehend and manually input                       | OK                         | OK                          | Good                        | Good                         | OK                          | Good                                     |
| Compute a whole dimension                           | Bad                        | Good                        | Bad                         | Bad                          | Bad                         | Bad                                      |
| Iterate one dimension then compute other dimensions | Bad                        | Good                        | Bad                         | Bad                          | Bad                         | Bad                                      |
| Filter, add or remove a single record               | Good                       | OK                          | Good                        | Good                         | Good                        | OK                                       |
| Manually navigate to a single value                 | OK                         | OK                          | OK                          | Good                         | Good                        | OK                                       |

I would like to look for existing comprehensive studies about this. For example:
- What design patterns use these?
- What other criteria that I miss?
- Which domains they are typically used?
- Is there any collection of data structure conversions between them? (Like [this article](https://medium.com/programming-essentials/how-to-convert-between-data-structures-in-javascript-8f7cbde64722 'How to Convert Between Data Structures in JavaScript | by Cristian Salcescu | Frontend Essentials | Medium'), but it limits on simple structures) 

Or if you want you can answer it here as well.

I'm mostly use JS and Python, if that matters.
