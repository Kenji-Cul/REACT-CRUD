import { useEffect, useState } from 'react';

const Stopwatch = () => {
   const [time, setTime] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
        setTime((t) => {
            console.log(t);
            return t + 1; 
        }
        );
     }, 1000);

     return () => clearInterval(interval);
   },[]);
   

   return (
       <div>
          Time: {time}
       </div>
   )
}

export default Stopwatch;