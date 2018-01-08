export default class SpeakerOne {
  constructor(talkSvc){
    this.talkSvc =  talkSvc;
  }
  render(idView,idSpeaker) {
    console.log(idSpeaker)
    this.talkSvc
    .findSpeakerById(idSpeaker)
    .then(speaker => document.getElementById(idView).innerHTML +=
        '<p>' + speaker.firstname + ' ' + speaker.lastname + '</p>'
    )
  }
}