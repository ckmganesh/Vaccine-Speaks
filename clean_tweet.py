import re
def clean(tweet):

    tweet = re.sub(r'^RT[\s]+', '', tweet)
    tweet = re.sub(r'https?:\/\/.*[\r\n]*', '', tweet)
    tweet = re.sub(r'#', '', tweet)
    tweet = re.sub(r'&amp;', 'and', tweet)
    tweet = re.sub(r'@[A-Za-z0–9]+', '', tweet)

    tweet = str(tweet).replace(r'\xe2\x80\x99', '\'')
    tweet = tweet.replace(r'\xe2\x80\x9c', '\"')
    tweet = tweet.replace(r'\xe2\x80\x9d', '\"')
    tweet = re.sub(r'\\...', '', tweet)

    return tweet

file_name="tweets_india.txt"
def read_tweets(file_name):
    with open(file_name, 'r') as f:
        tweets = [clean(line.strip()) for line in f]
    f.close()
    return tweets

tweets = read_tweets(file_name)
print(tweets)
with open("cleaned_tweets_india.txt", 'w') as f:
    for t in tweets:
        f.write(t+"\n")
    f.close()
print("finished cleaning")