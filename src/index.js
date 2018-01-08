import * as $ from 'jquery'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TalkService from './common/talk.service'
import { render } from './layout/index'
import SpeakerList from './speaker/list/index'
import SessionList from './session/list/index'
import Menu from './menu/index'
import SpeakerItem from './speaker/list/index';
import SpeakerOne from './speaker/item/index';
const talkService = new TalkService();
//fonction mettre en en forme
render()

var router = () => {
    if (location.hash == '#speakers-list') {
        const speakerList = new SpeakerList()
        speakerList.render("main-view")
    } else if (location.hash == '#sessions-list') {
        const sessionsList = new SessionList()
        sessionsList.render("main-view")
    } else if (location.hash.includes('#speakers?id=')){
        let param = new URLSearchParams(location.hash)
        let idSpeaker = param.get("#speakers?id")
        console.log(idSpeaker)
        const speaker = new SpeakerOne(talkService)
        speaker.render("main-view",idSpeaker)
    } else {
        const menu = new Menu
        menu.render("main-view")
    }
}
window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});