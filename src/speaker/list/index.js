import TalkService from "../../common/talk.service";

const talkSvc = new TalkService();

export default class SpeakerList {
  render(idView) {
    let template = "";
    talkSvc.findAllSpeakers().then(speakers => {
      JSON.parse(speakers).forEach(sp => {
        template +=
          '<a href="#speakers?id=' + sp.id + '">' + sp.firstname + "</a><br/>";
      });
      document.getElementById(idView).innerHTML = template;
    });
  }
}
