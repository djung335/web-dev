import posts from '../data/tweets.json';

console.log("action")
const tweets = (state = posts, action) => {
  switch (action.type) {
    case 'fetch-all-tweets':
      return (
          action.tweets
      )
    case 'like-tweet':
      return (
          state.map(tweet => {
            if (tweet._id === action.tweet._id) {
              if (tweet.liked === true) {
                tweet.liked = false;
                tweet.stats.likes--;
              } else {
                tweet.liked = true;
                tweet.stats.likes++;
              }
              return tweet;
            } else {
              return tweet;
            }
          })
      );
    case 'delete-tweet':
      return (state.filter(tweet => tweet._id !== action.tweet._id));
    case 'create-tweet':
      // const tweet = {
      //   _id: (new Date()).getTime() + '',
      //   "topic": "Web Development",
      //   "userName": "djung335",
      //   "verified": false,
      //   "handle": "88falling",
      //   "time": "2h",
      //   ...action.tweet,
      //   "avatar-image": "../../../images/react-blue.png",
      //   "logo-image": "../../../images/react-blue.png",
      //   "stats": {
      //     "comments": 0,
      //     "retweets": 0,
      //     "likes": 0
      //   },
      // };
      return ([
        action.tweet,
        ...state
      ]);
    default:
      return (state);
  }
};

export default tweets;
