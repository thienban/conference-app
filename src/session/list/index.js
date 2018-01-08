import TalkService from "../../common/talk.service";

const talkSvc = new TalkService();

export default class SessionList {
  render(idView) {
    let template = "";
    talkSvc.findAllSessions().then(sessions => {
      sessions.forEach(sp => {
        template += "<p>" + sp.title + "</p>";
      });
      document.getElementById(idView).innerHTML = template;
    });
  }
}
