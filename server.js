const express = require('express');
const app = express();
const PORT = 8000;

const guitars = {
    'les paul': {
        'strings': 6,
        'weight': 'heavy'
    },
    'telecaster': {
        'strings': 6,
        'weight': 'light'
    },
    'prs': {
        'strings': 7,
        'weight': 'medium'
    },
    'jackson': {
        'strings': 8,
        'weight': 'medium'
    },
    'gretsch': {
        'strings': 6,
        'weight': 'heavy'
    },
    'stratocaster': {
        'strings': 6,
        'weight': 'medium'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/', (request, response) => {
    response.json(guitars)
})

app.get('/api/:guitarName', (request, response) => {
    const guitarNames = request.params.guitarName.toLowerCase()
    if (guitars[guitarNames]) {
        response.json(guitars[guitarNames])
    } else {
        response.json(guitars['prs'])
    }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`running on port ${PORT}`);
});