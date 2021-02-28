import re
import csv
import pandas as pd
from pandas import DataFrame

f = open("cleaned_tweets_india.txt", "r")
s=f.read().replace("\"","\'")
s.replace(",","")
x = re.findall("[-]?[0-9]?[0-9][,][-]?[0-9]?[0-9][:]", s)
# print(x)
pattern = "[0-9]?[0-9][,][0-9]?[0-9][:](.*?)\|[0-9]?[0-9][,][0-9]?[0-9][:]"
# print(len(x));
buffer=0;
# print(len(x))
data = []
for i in range(len(x)-1):
    start=s.find(x[i],buffer)
    end=s.find(x[i+1],buffer)
    buffer=end;
    substr=s[start+len(x[i]):end]
    data.append(substr)
res = []
for sub in data:
    res.append(sub.replace("\n", ""))
print(res)

print(len(x))
print(len(res))
d=[]
for i in range(0,len(res)):
    lat=x[i][0:x[i].index(',')]
    long=x[i][x[i].index(',')+1:x[i].index(':')]
    twt=res[i].split("b\'")
    print(twt)
    for j in range(0,len(twt)):
        if(len(twt[j])>0):
            tmp=[]
            tmp.append(lat)
            tmp.append(long)
            tmp.append(twt[j])
            d.append(tmp)

print(d)
fields = ['Latitude', 'Longitude', 'Tweets']

filename = "datasetindia.csv"

with open(filename, 'w') as csvfile:
    # creating a csv writer object
    csvwriter = csv.writer(csvfile)

    # writing the fields
    csvwriter.writerow(fields)

    # writing the data rows
    csvwriter.writerows(d)
df2 = DataFrame(d,columns=['Latitude','Longitude','Tweets'])

#print(df.head())

#print(df['Tweets'])
df = pd.read_csv('datasetindia.csv')
df.to_csv('finaldatasetindia.csv', index=False)