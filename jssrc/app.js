// Ionic Starter App

import {onReady} from 'bootstrap';
import {router} from 'router';
import {Chats} from 'chat/Chats';
import {Children} from 'children/Children';
import {DashCtrl} from 'dashboard/DashCtrl';
import {ChatsCtrl} from 'chat/ChatsCtrl';
import {ChildrenCtrl} from 'children/ChildrenCtrl';
import {AddNewChildCtrl} from 'children/AddNewChildCtrl';
import {ChatDetailCtrl} from 'chat/ChatDetailCtrl';
import {ChildDetailCtrl} from 'children/ChildDetailCtrl';
import {AccountCtrl} from 'account/AccountCtrl';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    .config(router)
    .run(onReady);

angular.module('starter.controllers', [])
    .controller('DashCtrl', DashCtrl)
    .controller('ChatsCtrl', ChatsCtrl)
    .controller('ChildrenCtrl', ChildrenCtrl)
    .controller('AddNewChildCtrl', AddNewChildCtrl)
    .controller('ChildDetailCtrl', ChildDetailCtrl)
    .controller('ChatDetailCtrl', ChatDetailCtrl)
    .controller('AccountCtrl', AccountCtrl);

angular.module('starter.services', [])
    .service('Chats', Chats)
    .service('Children', Children);