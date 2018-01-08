const URL_SPEAKERS = "http://localhost:3000/speakers";
const URL_SESSIONS = "http://localhost:3000/sessions";

function xhr(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onreadystatechange = aEvt => {
      if (req.readyState == 4) {
        if (req.status == 200)
          resolve(req.responseText); // corps de la réponse
        else reject("Erreur pendant le chargement de la page");
      }
    };
    req.send(null);
  });
}

export default class TalkService {
  findAllSpeakers() {
    return xhr(URL_SPEAKERS);
  }
  findAllSessions() {
    return xhw(URL_SESSIONS);
  }
  findSpeaker() {
    return xhw(URL_SPEAKER);
  }
  findSession() {
    return xhw(URL_SESSION);
  }
}
