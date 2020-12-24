import React, {Component} from 'react';
import './itemList.css';
import gotService from '../sevices/gotService';
import Spinner from '../spinner';

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={this.props.onCharSelected(i)}>
                    {item.name}
                </li>
            )

        })
    }

    render() {
        const {charList} = this.state;

        if(!charList) {
            return <Spinner/>
        }

        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }
}