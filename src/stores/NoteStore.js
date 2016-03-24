import Reflux from 'reflux';
import NoteActions from '../actions/NoteActions';

let noteCounter = 0;

export default Reflux.createStore({
   
   listenables: [NoteActions],
   
   onAddNote: () => {
       
   },
   
   onRemoveNote: () => {
       
   },
   
   updateNotes: (list) => {
       
   },
   
   getInitialState: () => {
       
   }
});