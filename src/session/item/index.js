import TalkService from "../../common/talk.service";

let URL = location.hash;
let res = URL.split("/");
let id = res[res.length - 1];

const URL_SPEAKER = "http://localhost:3000/speakers?id=" + id;
const URL_SESSION = "http://localhost:3000/sessions?id=" + id;

const talkSvc = new TalkService();

export default class Session {
  render(idView) {
    let template = "";
    talkSvc.findAllSessions().then(sessions => {
      JSON.parse(sessions).forEach(sp => {
        template += "<p>" + sp.title + "</p>";
      });
      document.getElementById(idView).innerHTML = template;
    });
  }
}
