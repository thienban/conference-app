export default class TalkService {
  constructor(){
    this.URL_SPEAKERS = "http://localhost:3000/speakers"
    this.URL_SESSIONS = "http://localhost:3000/sessions"
  }
  xhr(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.onreadystatechange = aEvt => {
        if (req.readyState == 4) {
          if (req.status == 200)
            resolve(JSON.parse(req.responseText)); // corps de la réponse
          else reject("Erreur pendant le chargement de la page");
        }
      };
      req.send(null);
    });
  }
  findAllSpeakers() {
    return this.xhr(this.URL_SPEAKERS);
  }
  findAllSessions() {
    return this.xhr(this.URL_SESSIONS);
  }
  findSpeakerById(id) {
    return this.xhr(this.URL_SPEAKERS+"/"+id);
  }
  findSessionbyId(id) {
    return this.xhr(this.URL_SESSIONS+"/"+id);
  }
}
