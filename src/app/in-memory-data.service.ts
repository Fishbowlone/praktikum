import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Employee} from './heroes/hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const localHeroes = [
      {
        since: new Date(),
        id: 11,
        name: 'Max Mustermann',
        birthday: new Date(1990, 6, 4),
        birthplace: 'Berlin',
        residence: 'Wellingsbüttel',
        department: 'Verwaltung',
        phone: '+49 176 82 90 84 12',
        interests: 'Snowboarden, Fahrradfahren, Grillen, in der Sonne chillen, ' + 'Elektronik & Apple ;)',
        slogan: 'Stillstand ist Rückschritt',
        thing1: 'Katja',
        thing2: 'Weber Grill',
        thing3: 'Musik',
        favbook: ['Steve Jobs: A Biography', 'Harry Potter'],
        favfood: ['Pasta'],
        favmovie: ['Pirates of the Caribbean & The Fast and the Furious'],
        favdrink: ['Havana Club 7 Años'],
        ilike1: 'Essen',
        ilike2: 'Schlafen',
        ilike3: 'Computer',
        dontlike1: 'Arbeit',
        dontlike2: 'Lärm',
        dontlike3: 'Menschen',
        imageurl: 'http://via.placeholder.com/350x150',
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        google: 'https://www.google.de/',
      },
      {
        since: new Date(2018, 1, 1),
        id: 12,
        name: 'Julian Schubert',
        birthday: new Date(1998, 6, 4),
        birthplace: 'Hamburg',
        residence: 'Barmbek',
        department: 'Entwicklung',
        phone: '+49 176 82908412',
        interests: 'Schwimmen, Zocken, Saufen',
        slogan: 'I am what I am',
        thing1: 'Anna',
        thing2: 'Survival Kit',
        thing3: 'Gummiboot',
        favbook: 'Edgar Allan Poe - Complete Edition',
        favfood: 'Pizza',
        favmovie: 'Keine Angabe',
        favdrink: 'Red Bull',
        ilike1: 'Essen',
        ilike2: 'Schlafen',
        ilike3: 'Zocken',
        dontlike1: 'Insekten',
        dontlike2: 'Politik',
        dontlike3: 'Grammatik',
        imageurl: 'http://via.placeholder.com/350x150',
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        google: 'https://www.google.de/',
      },
      {
        since: new Date(2018, 1, 1),
        id: 13,
        name: 'Dennis Busch',
        birthday: new Date(1998, 6, 4),
        birthplace: 'Hamburg',
        residence: 'Barmbek',
        department: 'Entwicklung',
        phone: '+49 176 82908412',
        interests: 'Schwimmen, Zocken, Saufen',
        slogan: 'I am what I am',
        thing1: 'Anna',
        thing2: 'Survival Kit',
        thing3: 'Gummiboot',
        favbook: 'Edgar Allan Poe - Complete Edition',
        favfood: 'Pizza',
        favmovie: 'Keine Angabe',
        favdrink: 'Red Bull',
        ilike1: 'Essen',
        ilike2: 'Schlafen',
        ilike3: 'Zocken',
        dontlike1: 'Insekten',
        dontlike2: 'Politik',
        dontlike3: 'Grammatik',
        imageurl: 'http://via.placeholder.com/350x150',
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        google: 'https://www.google.de/',
      },
      {
        since: new Date(2018, 1, 1),
        id: 14,
        name: 'Anna Dumler',
        birthday: new Date(1998, 6, 4),
        birthplace: 'Hamburg',
        residence: 'Barmbek',
        department: 'Entwicklung',
        phone: '+49 176 82908412',
        interests: 'Schwimmen, Zocken, Saufen',
        slogan: 'I am what I am',
        thing1: 'Anna',
        thing2: 'Survival Kit',
        thing3: 'Gummiboot',
        favbook: 'Edgar Allan Poe - Complete Edition',
        favfood: 'Pizza',
        favmovie: 'Keine Angabe',
        favdrink: 'Red Bull',
        ilike1: 'Essen',
        ilike2: 'Schlafen',
        ilike3: 'Zocken',
        dontlike1: 'Insekten',
        dontlike2: 'Politik',
        dontlike3: 'Grammatik',
        imageurl: 'http://via.placeholder.com/350x150',
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        google: 'https://www.google.de/',
      },
    ];
    const loadedHeroes = JSON.parse(localStorage.getItem('Data'));
    console.debug(loadedHeroes);
    return {heroes: loadedHeroes || localHeroes };
  }
}
