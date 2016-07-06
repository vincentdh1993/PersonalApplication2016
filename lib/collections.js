Comments = new Meteor.Collection ("comments");
HouseDatas = new Meteor.Collection ("housedatas");
Settings = new Meteor.Collection ("settings");

Comments.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

HouseDatas.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Settings.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});