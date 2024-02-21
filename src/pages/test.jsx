import React, { useEffect, useState } from 'react';
import { useSubscription, gql } from '@apollo/client';

const NEW_POST_SUBSCRIPTION = gql`
  subscription {
    newPost {
      id
      title
      content
    }
  }
`;

const SubscriptionExample = () => {
  const [newPost, setNewPost] = useState(null);

  const { data, loading } = useSubscription(NEW_POST_SUBSCRIPTION);

  useEffect(() => {
    if (data && data.newPost) {
      setNewPost(data.newPost);
    }
  }, [data]);

  return (
    <div>
      <h2>Subscription Example</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {newPost && (
            <div>
              <h3>New Post:</h3>
              <p>Title: {newPost.title}</p>
              <p>Content: {newPost.content}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubscriptionExample;
