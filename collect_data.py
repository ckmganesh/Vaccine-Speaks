import tweepy
from clean_tweet import clean

auth = tweepy.OAuthHandler("ACCESS_KEY", "ACCESS_SECRET_KEY")
auth.set_access_token("ACCESS_TOKEN", "ACCESS_TOKEN_SECRET")
auth.secure = True
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

q = "vaccine"
tweetsPerQry = 40
fName = "tweets_india.txt"
sinceId = None

max_id = -1
maxTweets = 2000

tweetCount = 0

minLong = 68
maxLong = 98
minLat = 8
maxLat = 37
radius = "34km"



print("Downloading max {0} tweets".format(maxTweets))
with open(fName, 'w') as f:
    # while tweetCount < maxTweets:
    for i in range(minLat, maxLat):
        lat = i
        for j in range(minLong, maxLong):
            long = j
            geo = str(lat) + ","+str(long) + "," +radius
            print(geo)
            tweets = []
            # if tweetCount < maxTweets:
            try:
                new_tweets = api.search(q=q, lang="en", count=tweetsPerQry, tweet_mode='extended', geocode=geo)
                # if not new_tweets:
                #     print("No more tweets found")
                #     break
                if new_tweets:
                    print("new")
                    f.write(str(lat)+","+str(long)+":\n")
                    for tweet in new_tweets:
                        text = str(tweet.full_text.replace('\n', '').replace("\xe2\x80\x99", "\'").encode("utf-8"))+"\n"
                        f.write(text)

                    tweetCount += len(new_tweets)
                    print("Downloaded {0} tweets".format(tweetCount))
                    max_id = new_tweets[-1].id


            except tweepy.TweepError as e:
                print("some error : " + str(e))
                break

print("Downloaded {0} tweets, Saved to {1}".format(tweetCount, fName))

