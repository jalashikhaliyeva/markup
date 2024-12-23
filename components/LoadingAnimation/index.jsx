// import React from 'react';

// const LoadingAnimation = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         width: '100vw',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         zIndex: 9999,
//       }}
//     >

//       <img
//         src="/loading-gif/load_1main.gif"
//         alt="Loading content..."
//         style={{ maxHeight: '80%', maxWidth: '80%' }}
//       />

//     </div>
//   );
// };

// export default LoadingAnimation;

// components/LoadingAnimation.js
import Image from "next/image";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-white dark:bg-bgDark z-50">
      {/* Light Mode Loading GIF */}
      <Image
        src="/loading-gif/load_1main.gif"
        alt="Loading content..."
        width={200} // Adjust as needed
        height={200} // Adjust as needed
        className="block dark:hidden w-[50%]"
      />

      {/* Dark Mode Loading GIF */}
      <Image
        src="/loading-gif/load_1main.gif"
        alt="Loading content..."
        width={200} // Adjust as needed
        height={200} // Adjust as needed
        className="hidden dark:block w-[50%]"
      />
    </div>
  );
};

export default LoadingAnimation;
