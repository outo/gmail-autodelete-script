I haven't come across an efficient and reliable way to auto delete gmail messages. 
Once I got up to email total count of about 30K my email client was just crashing. 
Bear in mind this tool is just a quick utility to get the job done.    

I am running this tool from within Google Script Cloud on a time trigger. 
It will automatically remove messages with matching:
- portion of a subject field
- portion of a sender ("from") field
- age

To use go to https://script.google.com, paste the JS source and save to Google Drive. 
In the menu of Google Script you can set trigger to execute this automatically. 
