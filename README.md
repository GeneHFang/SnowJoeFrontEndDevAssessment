# Snow Joe Front End Dev Assessment by Gene H Li Fang

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Format for questions.json file
This application expects a .json quiz questions file in the following format:

```
{
    "title": "Some Title",
    "questions": [
        {
            "question": "Sample Question?",
            "options": [
                "Wrong example option1",
                "Wrong example option2",
                "Wrong example option3",
                "Correct example option"
            ], 
            "answer" : "Correct example option"
        }
    ]
}
```

`"questions"` can be an array of any size.

`"options"` can be an array of any size. Additionally, the correct answer does not necessarily need to be the last or 4th element in this array.

`"answer"` must match one of the elements in `"options"` exactly.

An example `questions.json` file is included in the repository.