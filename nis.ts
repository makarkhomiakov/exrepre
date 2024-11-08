   import React from 'react';
   import Tooltip from './Tooltip'; // Adjust the import path as necessary

   function App() {
     return (
       <div style={{ padding: '50px' }}>
         <Tooltip text="This is a tooltip!">
           <button>Hover over me</button>
         </Tooltip>
       </div>
     );
   }

   export default App;
   