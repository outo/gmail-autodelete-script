function mailboxCleanser() {

    //text which email's "from" field has to contain
    var fromContains = 'example@example.com'; //TODO EMAIL ADDRESS HERE;

    //text which email's "subject" field has to contain
    var subjectContains = 'Part of subject text goes here'; //TODO EMAIL SUBJECT

    //number of days (from today) the emails have to be preserved for (i.e. won't be deleted even if subject and sender matches)
    var numberOfDaysToPreserve = 7;

    //if the email's date is before this date the email won't be deleted
    var ignoreEmailsBeforeThatDate = '2017/1/1';

    Logger.clear();
    Logger.log('Started execution at ' + new Date());
    var removedCount;
    var totalRemovedCount = 0;
    var queryString = constructQueryString(fromContains, subjectContains, ignoreEmailsBeforeThatDate, numberOfDaysToPreserve);
    Logger.log('Removing messages matching query "' + queryString + '".');
    while ((removedCount = removeMessages('me', queryString)) > 0) {
        totalRemovedCount += removedCount;
    }
    Logger.log('Removed ' + totalRemovedCount + ' messages.');
}

function constructQueryString(from, subject, ignoreEmailsBeforeThatDate, numberOfDaysToPreserve) {
    var date = new Date(new Date().valueOf() - (numberOfDaysToPreserve*24*60*60*1000));
    var dateString = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    return 'from:(' + from + ') subject:(' + subject + ') after:' + ignoreEmailsBeforeThatDate + ' before:' + dateString;
}

function removeMessages(userId, queryString) {
    var removedCount = 0;
    var threadList = Gmail.Users.Messages.list(userId, {
        q: queryString,
        maxResults: 500
    });
    if (threadList.messages) {
        threadList.messages.forEach(function(message) {
            Gmail.Users.Messages.remove(userId, message.id);
            removedCount++;
        });
    }
    return removedCount;
}

