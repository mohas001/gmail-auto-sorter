function autoLabelEmails() {
  var threads = GmailApp.search('in:inbox is:unread subject:Invoice');
  var label = GmailApp.createLabel('Accounting');

  for (var i = 0; i < threads.length; i++) {
    threads[i].addLabel(label);
    threads[i].markRead();
    threads[i].moveToArchive();
  }
}
