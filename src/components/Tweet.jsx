// function Tweet() {
//   return (
//     <div className="tweet">
//       <img
//         src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
//         className="profile"
//         alt="profile"
//       />

//       <div className="body">
//         <div className="top">
//           <span className="user">
//             <span className="name">Ironhack</span>
//             <span className="handle">@ironhack</span>
//           </span>

//           <span className="timestamp">Nov 30, 2020</span>
//         </div>

//         <p className="message">
//           On December 7th, we will be hosting a #webinar that will introduce you
//           to #SQL! Are you ready? 🚀
//         </p>

//         <div className="actions">
//           {/* Font Awesome icons */}
//           <i className="far fa-comment" data-testid="comment-icon"></i>
//           <i className="fas fa-retweet" data-testid="retweet-icon"></i>
//           <i className="far fa-heart" data-testid="heart-icon"></i>
//           <i className="fas fa-share" data-testid="share-icon"></i>
//         </div>
//       </div>

//       <i className="fas fa-ellipsis-h"></i>
//     </div>
//   );
// }

// export default Tweet;

import React from 'react';
import ProfileImage from './ProfileImage'; // Import the ProfileImage component
import User from './User'; // Import the User component
import Timestamp from './Timestamp'; // Import the Timestamp component
import Message from './Message'; // Import the Message component
import Actions from './Actions'; // Import the Actions component


function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;

  return (
    <div className="tweet">
      <div className="user-info">
        <ProfileImage image={user.image} alt={user.name} />
        <User name={user.name} handle={user.handle} />
        <Timestamp timestamp={timestamp} />
        <Message message={message} />
        <Actions />
      </div>
      {/* <p className="timestamp">{timestamp}</p>
      <p className="message">{message}</p> */}
    </div>
  );
}

export default Tweet;

