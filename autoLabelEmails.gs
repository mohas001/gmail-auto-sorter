function autoLabelEmails() {
  var threads = GmailApp.search('in:inbox is:unread subject:Rechnung');
  var label = GmailApp.createLabel('Buchhaltung');

  for (var i = 0; i < threads.length; i++) {
    threads[i].addLabel(label);
    threads[i].markRead();
    threads[i].moveToArchive();
  }
}
