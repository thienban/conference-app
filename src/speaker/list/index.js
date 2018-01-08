import TalkService from "../../common/talk.service";

const talkSvc = new TalkService();

export default class SpeakerItem {
  render(idView) {
    let template = "";
    talkSvc.findAllSpeakers().then(speakers => {
      
     speakers.forEach(sp => {
        template +=
          '<a href="#speakers?id=' + sp.id + '">' + sp.firstname + "</a><br/>";
      });
      document.getElementById(idView).innerHTML = template;
    });
  }
}

