import { useState } from 'react';

const Post = () => {

  const [ likeCount, setLikeCount ] = useState(0);



  const updateLikes = () => {
      setLikeCount(likeCount + 1);

  };

  return (
    <section>
    <p>You have {likeCount} likes</p>
          <button onClick={ updateLikes }>🌷</button>
          
      </section>
      
  );
};

export default Post;