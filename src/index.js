import * as $ from 'jquery'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TalkService from './common/talk.service'
import { render } from './layout/index'
import SpeakerList from './speaker/list/index'
import SessionList from './session/list/index'
import Menu from './menu/index'
//fonction mettre en en forme
render()

var router = () => {
    if (location.hash == '#speakers-list') {
        const speakerList = new SpeakerList()
        speakerList.render("main-view")
    } else if (location.hash == '#sessions-list') {
        const sessionsList = new SessionList()
        sessionsList.render("main-view")
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