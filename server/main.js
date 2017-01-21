import { BrowserPolicy } from 'meteor/browser-policy-common';
import '../imports/api/methods.js';


Meteor.startup(() => {
  BrowserPolicy.content.allowOriginForAll('*');
  BrowserPolicy.content.allowImageOrigin("blob:");
  var constructedCsp = BrowserPolicy.content._constructCsp();
  BrowserPolicy.content.setPolicy(constructedCsp +" media-src blob:;");
  // create admin from settings
  if (Meteor.users.findOne(Meteor.settings.adminId)){
    Roles.addUsersToRoles(Meteor.settings.adminId, ['admin']);
  }

  Meteor.publish("userData", function () {
    if (this.userId) {
      return Meteor.users.find({_id: this.userId});
    } else {
      this.ready();
    }
  });
});
