export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async gerResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok ) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }

        return await res.json();
    };

    async getAllCharacters() {
        const res = await  this.gerResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character = await this.gerResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses() {
        return this.gerResource(`/houses/`);
    }

    getHouse(id) {
        return this.gerResource(`/houses/${id}/`);
    }

    getAllBooks() {
        return this.gerResource(`/books/`);
    }

    getBook(id) {
        return this.gerResource(`/books/${id}/`);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }


    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }

}


