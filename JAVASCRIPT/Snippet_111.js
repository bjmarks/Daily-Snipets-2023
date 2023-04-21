const display = document.querySelector('.display');
const controllerWrapper = document.querySelector('.controllers');
const State = ['Initial', 'Record', 'RecordAgain'];
let mediaRecorder, chunks = [], audioURL = '';
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    console.log('mediaDevices supported..')
    navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(stream => {
        mediaRecorder = new MediaRecorder(stream)
        mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data)
        }
        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, {'type': 'audio/mpeg; codecs=mp3'})
            chunks = []
            audioURL = window.URL.createObjectURL(blob)
            document.querySelector('audio').src = audioURL
        }
    }).catch(error => {
        console.log('Following error has occured : ',error)
    })
}
else{
    application()
}
function clearAll() { 
    display.textContent = '';
    controllerWrapper.textContent = '';
}
const record = () => {
    mediaRecorder.start()
    application(1)
}
const stopRecording = () => {
    mediaRecorder.stop()
    application(2)
}
const addButton = (id, funString, text) => {
    const btn = document.createElement('button')
    btn.id = id
    btn.setAttribute('onclick', funString)
    btn.textContent = text
    controllerWrapper.append(btn)
}
const addMessage = (text) => {
    const msg = document.createElement('p')
    msg.textContent = text
    display.append(msg)
}
const addAudio = () => {
    const audio = document.createElement('audio')
    audio.controls = true
    audio.src = audioURL
    display.append(audio)
}
const application = (index) => {
    switch (State[index]) {
        case 'Initial':
            clearAll();
            addButton('record', 'record()', 'Start Recording');
            break;
        case 'Record':
            clearAll();
            addMessage('Recording...');
            addButton('stop', 'stopRecording()', 'Stop Recording');
            break;
        case 'RecordAgain':
            clearAll();
            addAudio();
            addButton('record', 'record()', 'Record Again');
            break;
        default:
            clearAll()
            addMessage('Your browser does not support mediaDevices')
            break;
    }
}
application(0)