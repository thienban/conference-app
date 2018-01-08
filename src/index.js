import TalkService from './common/talk.service'

const talkSvc = new TalkService()

talkSvc.findAllSpeakers().then(
    speaker => JSON.parse(speaker).forEach(sp => console.log(sp.firstname))
)


alert('Conférence App démarré !');