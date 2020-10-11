import React from 'react';
import logo from './logo.svg';
import './App.css';
// import MarkerPopup from "./components/MarkerPopup";
import Editor from './components/Editor';
// import customUpdateWithOverlay from './components/CustomUpdateWithOverlay';

// let word1 = getRandomWord();
// let highlight1 = {};
// highlight1.update = customUpdateWithOverlay.call(
// highlight1,
// 'marker1',
// word1.range,
// 'bottom',
// 'Lorem Ipsum Popover',
// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis velit tellus.',
// false);
// // Returns a word randomly picked from the editor along with its range
// let lines = editor.getValue().splitOneCharacter(/\n/);
// lines = lines.map((line, i) => [i, line[1].splitOneCharacter(/\s+/)]);
// function getRandomWord() {
//   let randomLine = lines[Math.getRandomInt(2, lines.length)];
//   let randomWord = randomLine[1][Math.getRandomInt(0, randomLine[1].length)];
//   let range = new Range(randomLine[0], randomWord[0], randomLine[0], randomWord[0] + randomWord[1].length);
//   range.start = editor.getSession().doc.createAnchor(range.start);
//   range.end = editor.getSession().doc.createAnchor(range.end);
//   let word = randomWord[1];
//   return { range, word };
// };


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <MarkerPopup>
          <div id = "editor">
              Hover over the highlighted words to see some popups!
            -----------------------------------------------------------
            across against answer awhile
            between board bottom breakfast broken build building built
            captain carried caught charge chicken circus cities clothes company
            couldn't country discover doctor doesn't dollar during
            eighth else enjoy enough everybody example except excuse
            field fifth finish following good-by group
            happened harden haven't heavy held hospital
            idea instead known laugh middle minute mountain
            ninth ocean office parent peanut pencil picnic police pretty prize
            quite radio raise really reason remember return
            Saturday scare second since slowly stories student sudden suit sure swimming
            though threw tired together tomorrow toward tried trouble truly turtle
            until village visit wear we'll whole whose women wouldn't writing written wrote
            yell young
          </div>
        </MarkerPopup> */}
        <Editor />
      {/* </header> */}
    </div>
  );
}

export default App;
