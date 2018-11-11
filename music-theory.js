
let mAlphabet;




function initialize_chords(){
  let chords = [,
    //first round
    "Am",     ["Bm7b5", "E7b9"], "Am",          ["Bm7b5", "E7b9"],
    "Am",     ["Dm7",   "G7"],   "CM7",          "A7b9",
    "Dm7",     "G7",             "CM7",          "FM7",
    "Bm7b5",   "E7b9",           "Am",          ["Bm7b5", "E7b9"],

    "Am",     ["Bm7b5", "E7b9"], "Am",           "Am",
    "Em7b5",   "A7b9",           "Dm",           "Dm",
    "Dm7",    ["Bm7b5", "E7b9"],["Am", "Am7/G"], "FM7",
    "Bm7b5",   "E7b9",           "Am",          ["Bm7b5", "E7b9"],


    //second round

    "Am",     ["Bm7b5", "E7b9"], "Am",          ["Bm7b5", "E7b9"],
    "Am",     ["Dm7",   "G7"],   "CM7",          "A7b9",
    "Dm7",     "G7",             "CM7",          "FM7",
    "Bm7b5",   "E7b9",           "Am",          ["Bm7b5", "E7b9"],

    "Am",     ["Bm7b5", "E7b9"], "Am",           "Am",
    "Em7b5",   "A7b9",           "Dm",           "Dm",
    "Dm7",    ["Bm7b5", "E7b9"],["Am", "Am7/G"], "FM7",
    "Bm7b5",   "E7b9",           "Am",          ["Bm7b5", "E7b9"],


    //thrid round

    "Am",     ["Bm7b5", "E7b9"], "Am",          ["Bm7b5", "E7b9"],
    "Am",     ["Dm7",   "G7"],   "CM7",          "A7b9",
    "Dm7",     "G7",             "CM7",          "FM7",
    "Bm7b5",   "E7b9",           "Am",          ["Bm7b5", "E7b9"],

    "Am",     ["Bm7b5", "E7b9"], "Am",           "Am",
    "Em7b5",   "A7b9",           "Dm",           "Dm",
    "Dm7",    ["Bm7b5", "E7b9"],["Am", "Am7/G"], "FM7",
    "Bm7b5",   "E7b9",           "Am",           "A-",

   ["Dm7","Am7"],["Dm7","Am7"], ["Dm7","Em7"],   "Am7",
  ]
  return chords
}



function initialize_scales(){
  let c =teoria.note('c');
  let d =teoria.note('d');
  let e =teoria.note('e');
  let f =teoria.note('f');
  let g =teoria.note('g');
  let a =teoria.note('a');
  let b =teoria.note('b');

  let raw_scales = [,
    //first round

    // Am| Bm7b5 E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    // Am| Dm7 G7| CM7| A7b9
    a.scale('harmonicminor'),
    c.scale('major'),
    c.scale('major'),
    d.scale('harmonicminor'),
    // Dm7| G7| CM7| FM7
    d.scale('dorian'),
    d.scale('dorian'),
    c.scale('major'),
    c.scale('major'),
    // Bm7b5| E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),

    //___

    //Am| Bm7b5 E7b9| Am| Am
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    //Em7b5| A7b9| Dm
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    //Dm7| Bm7b5 E7b9| Am Am7/G| FM7
    d.scale('dorian'),
    a.scale('harmonicminor'),
    f.scale('lydian'),
    f.scale('lydian'),
    //Bm7| E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),


    //second round

    // Am| Bm7b5 E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    // Am| Dm7 G7| CM7| A7b9
    a.scale('harmonicminor'),
    c.scale('major'),
    c.scale('major'),
    d.scale('harmonicminor'),
    // Dm7| G7| CM7| FM7
    d.scale('dorian'),
    d.scale('dorian'),
    c.scale('major'),
    c.scale('major'),
    // Bm7b5| E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),

    //___

    //Am| Bm7b5 E7b9| Am| Am
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    //Em7b5| A7b9| Dm
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    //Dm7| Bm7b5 E7b9| Am Am7/G| FM7
    d.scale('dorian'),
    a.scale('harmonicminor'),
    f.scale('lydian'),
    f.scale('lydian'),
    //Bm7| E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),

    //third round

    // Am| Bm7b5 E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    // Am| Dm7 G7| CM7| A7b9
    a.scale('harmonicminor'),
    c.scale('major'),
    c.scale('major'),
    d.scale('harmonicminor'),
    // Dm7| G7| CM7| FM7
    d.scale('dorian'),
    d.scale('dorian'),
    c.scale('major'),
    c.scale('major'),
    // Bm7b5| E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),

    //___

    //Am| Bm7b5 E7b9| Am| Am
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    //Em7b5| A7b9| Dm
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    //Dm7| Bm7b5 E7b9| Am Am7/G| FM7
    d.scale('dorian'),
    a.scale('harmonicminor'),
    f.scale('lydian'),
    f.scale('lydian'),
    //Bm7| E7b9| Am| Am
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    //Dm7 Am7| Dm7 Am7| Dm7 Am7| Am
    a.scale('dorian'),
    a.scale('minor'),
    a.scale('dorian'),
    a.scale('minor'),



  ];




  return raw_scales
}




function getGridMapFromScale(scale){

    let scaleSize = scale.length;
    let chromaticIndex = mChromaticScale.indexOf(scale[0]);

    let newScale = [];


    for(let i = 0; i < 14; i++){
        newScale[(chromaticIndex+i)%14]  = scale[(i)%7];
    }

    mAlphabet = [];

    newScale.forEach(note=>{
        mAlphabet.push(note.charAt(0));
    })
    console.log(newScale)
    console.log("Alpha: "+mAlphabet);


    let octave = 2;
    let order = ['c','d','e','f','g','a','b']
    newScale[0] = newScale[0]+octave;
    for(let i = 1; i<newScale.length; i++){

        let currentindex = order.indexOf(mAlphabet[i])
        let previousindex = order.indexOf(mAlphabet[i-1])


        if(currentindex<previousindex){
            // console.log(newScale[i]+" reached next octave")
            octave++;
        }
        newScale[i] = newScale[i]+octave;


    }

    console.log("New Scale "+newScale);
    return newScale;
}



function getChordNoteIndexFromAlphabet(chordNotes){

  console.log("Chord NOtes from Alphabet");
  console.log("Alphabet: "+mAlphabet);
  console.log("Chord Names: "+chordNotes);

  let indexes = [];


  for (let i=0; i<mAlphabet.length; i++){
    for(j=0; j<chordNotes.length; j++){


        if(chordNotes[j].charAt(0)===mAlphabet[i]){
          indexes.push(i);
        }

    }



  }


    console.log("Chord Note Indexes::    "+indexes);

    return indexes;





}
