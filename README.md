I haven't come across an efficient and reliable way to auto delete gmail messages. 
Once I got up to email total count of about 30K my email client was just crashing. 
Bear in mind this tool is just a quick utility to get the job done.    

I am running this tool from within Google Script Cloud on a time trigger. 
It will automatically remove messages with matching:
- portion of a subject field
- portion of a sender ("from") field
- age

To use go to https://script.google.com, paste the JS source, modify parameters on the top of main function and save to Google Drive. 
In the menu of Google Script you can set trigger to execute this automatically. 
If many messages fall into your filter category then the execution may fail due to execution time constraint. 
If that's your case, this tool could be easily changed to cater for this by removing the while loop inside mailboxCleanser() function and setting the trigger to more frequent option. 

Important: The first time this is run your browser will display's Gmail's permissions webpage. 
Once this tool does its job, these permissions can be revoked by going to https://myaccount.google.com/u/0/permissions. 

Please note: Setting the parameters too widely will irreversibly remove emails you might have wanted to keep. 
