import boto3
client_comprehend = boto3.client(
   'comprehend',
   region_name = 'ap-south-1',
   aws_access_key_id = "AKIAVKEEAHKYBDL3TTGV",
   aws_secret_access_key = "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"
)

sentiment = client_comprehend.detect_sentiment(LanguageCode='en',Text="I am very happy")
print(sentiment)