import pandas as pd
df=pd.read_csv("sentiment_analysis_final.csv")
df1=pd.read_csv("sentiment_analysis_final_india.csv")
result=pd.concat([df,df1])
result.to_csv("sentiment_plot.csv")