
let mPiano; 
let mKeyGrid;

let mChromaticScale = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];




let aHm = ['a','b','c','d','e','f','g#'];
let dHm = ['d','e','f','g','a','bb','c#']
let bM = ['b','c#','d#','e','f#','g#','a#']
// find index of root note
// assign the grid to that eq scale




function getGridMapFromScale(scale){

    let scaleSize = scale.length;
    let chromaticIndex = mChromaticScale.indexOf(scale[0]);
    let delta = chromaticIndex - scaleSize;
    console.log("Delta:" +delta);
    let initialIndex = scaleSize - delta;
    let newScale = [];
    

    for(let i = 0; i < 13; i++){
        newScale[(chromaticIndex+i)%14]  = scale[(i)%7];
    }

    let alphabet = [];

    newScale.forEach(note=>{
        alphabet.push(note.charAt(0));
    })
    console.log(newScale)
    console.log("Alpha: "+alphabet);


    let octave = 2;
    let order = ['c','d','e','f','g','a','b']
    newScale[0] = newScale[0]+octave;
    for(let i = 1; i<newScale.length; i++){
        
        let currentindex = order.indexOf(alphabet[i])
        let previousindex = order.indexOf(alphabet[i-1])
        
        newScale[i] = newScale[i]+octave;
        if(currentindex<previousindex){
            console.log(newScale[i]+" reached next octave")
            octave++;
        }


    }



    // for(let i =0 ;i<12 ;i++){
    //     console.log(initialIndex);
    //     newScale[i] = scale[initialIndex];
    //     if(initialIndex === scaleSize){
    //         initialIndex = 0;
    //         octave++;
    //     }
    // }

    console.log(newScale);

}


$(document).ready(function(){


    console.log("listo");
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
        "C4":"C3.wav",
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
    },function(){},"sound/").toMaster();

    mKeyGrid = $("#key-grid");
    

    getGridMapFromScale(bM);



});

function notePressed(id){
    console.log(`ID: ${id}`);
    mPiano.triggerAttackRelease("c3","1n");
}


function assignScaleToGrid(scale){

}




