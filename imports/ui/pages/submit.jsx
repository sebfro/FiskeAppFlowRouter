import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import SimpleSchema from 'simpl-schema';

import { Reports } from '../../api/reports.js';

//Submit component - represents the whole app

export default class SubmitPage extends Component {
    constructor(props) {
        super(props);
    }

    handleSend(event) {
        event.preventDefault();
        console.log("hei");

        //Find the text field via React ref
        const titleText = ReactDOM.findDOMNode(this.refs.rapportTitel).value.trim();
        const kommentarText = ReactDOM.findDOMNode(this.refs.rapportKommentar).value.trim();

        Meteor.call('reports.insert', text);

        console.log("hei");

        //Clear form
        ReactDOM.findDOMNode(this.refs.rapportTitel).value = "";
        ReactDOM.findDOMNode(this.refs.rapportKommentar).value = "";

        console.log(titleText);
        console.log(kommentarText);
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Ny rapport</h1>
                </header>

                <ul>
                    <li>
                        <form>
                            <label>
                                Titel:
                                <input type="text" ref="rapportTitel" name="titel"/>
                            </label>
                        </form>
                    </li>
                    <li>
                        <img src="https://image.spreadshirtmedia.net/image-server/v1/compositions/132671431/views/1,width=800,height=800,appearanceId=388,version=1478003241/tykk-runde-morsom-tegneserie-fisk-t-skjorter-t-skjorte-for-menn.jpg"
                             width="128" height="128"/>
                        <img src="https://image.spreadshirtmedia.net/image-server/v1/compositions/132671431/views/1,width=800,height=800,appearanceId=388,version=1478003241/tykk-runde-morsom-tegneserie-fisk-t-skjorter-t-skjorte-for-menn.jpg"
                             width="128" height="128"/>
                        <img src="https://image.spreadshirtmedia.net/image-server/v1/compositions/132671431/views/1,width=800,height=800,appearanceId=388,version=1478003241/tykk-runde-morsom-tegneserie-fisk-t-skjorter-t-skjorte-for-menn.jpg"
                             width="128" height="128"/>
                    </li>
                    <li>
                        <form>
                            <label>
                                Kommentar:
                                <input type="text" ref="kommentar" name="beskrivelse"/>
                            </label>
                        </form>
                    </li>
                    <li>
                        <form className="submitRapport">
                            <button type="submit" ref="submitRapportbtn" onSubmit={this.handleSend.bind(this)}>
                                Send
                            </button>
                        </form>
                    </li>
                    <li>
                        <label>
                            Svar:
                        </label>
                        <textarea name="respons" rows="10" cols="50">
                            Her kommer repsonsen når den er klar.
                        </textarea>
                    </li>
                </ul>
            </div>
        );
    }
}
