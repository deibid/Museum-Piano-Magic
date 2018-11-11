
let mPiano;
let mUIKeyGrid;

let mChromaticScale = ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];
let mMasterKeyScale = [];




let cM  = ['c','d','e','f','g','a','b'];
let aHm = ['a','b','c','d','e','f','g#'];
let dHm = ['d','e','f','g','a','bb','c#']
let bM = ['b','c#','d#','e','f#','g#','a#']
// find index of root note
// assign the grid to that eq scale


let mPlayer = new Tone.Player("sound/Manha De Carnaval (Black Orpheus) Rhodes.wav").toMaster()



let mScaleSequence;
let mChordSequence;









$(document).ready(function(){


    mPiano = new Tone.Sampler({
        "C3":"C3.wav",
        "C#3":"Csharp3.wav",
        "D3":"D3.wav",
        "D#3":"Dsharp3.wav",
        "E3":"E3.wav",
        "F3":"F3.wav",
        "F#3":"Fsharp3.wav",
        "G3":"G3.wav",
        "G#3":"Gsharp3.wav",
        "A3":"A3.wav",
        "A#3":"Asharp3.wav",
        "B3":"B3.wav",
        "C4":"C4.wav",
        "C#4":"Csharp4.wav",
        "D4":"D4.wav",
        "D#4":"Dsharp4.wav",
        "E4":"E4.wav",
        "F4":"F4.wav",
        "F#4":"Fsharp4.wav",
        "G4":"G4.wav",
        "G#4":"Gsharp4.wav",
        "A4":"A4.wav",
        "A#4":"Asharp4.wav",
        "B4":"B4.wav",
    },null,"sound/").toMaster();

    mPiano.volume.value = -13;



    mUIKeyGrid = $("#key-grid");


    mMasterKeyScale = getGridMapFromScale(cM);
    // mMasterKeyScale = getGridMapFromScale(aHm);
    // getGridMapFromScale(dHm);
    // getGridMapFromScale(bM);
    initializeSequences();



});



function initializeSequences(){

  console.log("INIT SEQ");

  Tone.Transport.bpm.value = 140;

  let chords = initialize_chords();
  let scales = initialize_scales();

  mScaleSequence = new Tone.Sequence(handleScaleChange, scales,"1n");
  mChordSequence = new Tone.Sequence(handleChordChange, chords,"1n");


}


function handleScaleChange(time,scale){
  if(scale === null)return;
  console.log(scale)
  console.log("Scale Change. Scale:  "+ scale.simple());

  mMasterKeyScale = getGridMapFromScale(scale.simple());


}

function handleChordChange(time,chordName){
  if(chordName === null)return;
  console.log("Chord chcange. Chords:  " +chordName);

  let chordNotes = teoria.chord(chordName).simple();
  console.log("CHORD NOTES: "+chordNotes)

  let highlightedNotes = [];
  for(let i = 0; i<chordNotes.length; i++){
    if(i ===2) continue;
    highlightedNotes.push(chordNotes[i]);

  }
  let indexes = getChordNoteIndexFromAlphabet(highlightedNotes);

  updateKeysToMatchChordInScale(indexes);

  $("#chord-name-tag").html(chordName);



}


function updateKeysToMatchChordInScale(indexes){


  mUIKeyGrid.children().each(function(index){
    console.log("REMOVING CLASS");
      $(this).removeClass("key-hinted");
  });

  indexes.forEach(index=>{

      let id = "#key-"+(index+1);
      console.log("ID in update: "+id);
      $(id).addClass('key-hinted');
    });




}


function notePressed(id){
    console.log(`ID: ${id}`);

    let keyNumber  = id.split("-")[1];
    let note = mMasterKeyScale[keyNumber-1];
    console.log(`note to be played ${note}`);
    mPiano.triggerAttackRelease(note,"2n");


}



function play(){
  mPlayer.start()
  console.log("Play");

  Tone.Transport.start();
  mScaleSequence.start();
  mChordSequence.start();



}


function stop(){

  mUIKeyGrid.children().each(function(index){
    console.log("REMOVING CLASS");
      $(this).removeClass("key-hinted");
  });

  mPlayer.stop()
  console.log("Stop");
  Tone.Transport.stop();
  mScaleSequence.stop();
  mChordSequence.stop();
}
