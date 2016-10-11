define("bootstrap", ["exports"], function (exports) {
    "use strict";

    exports.onReady = onReady;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function onReady($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }
});
define("router", ["exports"], function (exports) {
    "use strict";

    exports.router = router;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function router($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
        .state("tab", {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })

        // Each tab has its own nav history stack:

        .state("tab.dash", {
            url: "/dash",
            views: {
                "tab-dash": {
                    templateUrl: "templates/tab-dash.html",
                    controller: "DashCtrl"
                }
            }
        }).state("tab.chats", {
            url: "/chats",
            views: {
                "tab-chats": {
                    templateUrl: "templates/tab-chats.html",
                    controller: "ChatsCtrl"
                }
            }
        }).state("tab.children", {
            url: "/children",
            views: {
                "tab-children": {
                    templateUrl: "templates/tab-children.html",
                    controller: "ChildrenCtrl"
                }
            }
        }).state("tab.child-detail", {
            url: "/children/:id",
            views: {
                "tab-children": {
                    templateUrl: "templates/child-detail.html",
                    controller: "ChildDetailCtrl"
                }
            }
        }).state("tab.addnewchild", {
            url: "/addnewchild",
            views: {
                "tab-addnewchild": {
                    templateUrl: "templates/tab-addnewchild.html",
                    controller: "AddNewChildCtrl"
                }
            }
        }).state("tab.chat-detail", {
            url: "/chats/:chatId",
            views: {
                "tab-chats": {
                    templateUrl: "templates/chat-detail.html",
                    controller: "ChatDetailCtrl"
                }
            }
        }).state("tab.account", {
            url: "/account",
            views: {
                "tab-account": {
                    templateUrl: "templates/tab-account.html",
                    controller: "AccountCtrl"
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise("/tab/dash");
    }
});
define("account/AccountCtrl", ["exports"], function (exports) {
    "use strict";

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var AccountCtrl = exports.AccountCtrl = function AccountCtrl($scope) {
        _classCallCheck(this, AccountCtrl);

        this.$inject = ["$scope"];

        $scope.settings = {
            enableFriends: true
        };
    };
});
define("chat/ChatDetailCtrl", ["exports"], function (exports) {
    "use strict";

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var ChatDetailCtrl = exports.ChatDetailCtrl = function ChatDetailCtrl($scope, $stateParams, Chats) {
        _classCallCheck(this, ChatDetailCtrl);

        this.$inject = ["$scope", "$stateParams", "Chats"];
        $scope.chat = Chats.get($stateParams.chatId);
    };
});
define("chat/Chats", ["exports"], function (exports) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    // Some fake testing data
    var chats = [{
        id: 0,
        name: "Ben Sparrow",
        lastText: "You on your way?",
        face: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png"
    }, {
        id: 1,
        name: "Max Lynx",
        lastText: "Hey, it's me",
        face: "https://avatars3.githubusercontent.com/u/11214?v=3&s=460"
    }, {
        id: 2,
        name: "Andrew Jostlin",
        lastText: "Did you get the ice cream?",
        face: "https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg"
    }, {
        id: 3,
        name: "Adam Bradleyson",
        lastText: "I should buy a boat",
        face: "https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg"
    }, {
        id: 4,
        name: "Perry Governor",
        lastText: "Look at my mukluks!",
        face: "https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg"
    }];

    var Chats = exports.Chats = (function () {
        function Chats() {
            _classCallCheck(this, Chats);
        }

        _createClass(Chats, {
            all: {
                value: function all() {
                    return chats;
                }
            },
            remove: {
                value: function remove(chat) {
                    chats.splice(chats.indexOf(chat), 1);
                }
            },
            get: {
                value: function get(chatId) {
                    for (var i = 0; i < chats.length; i++) {
                        if (chats[i].id === parseInt(chatId)) {
                            return chats[i];
                        }
                    }
                    return null;
                }
            }
        });

        return Chats;
    })();
});
define("chat/ChatsCtrl", ["exports"], function (exports) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var ChatsCtrl = exports.ChatsCtrl = (function () {
        function ChatsCtrl($scope, Chats) {
            _classCallCheck(this, ChatsCtrl);

            this.$inject = ["$scope", "Chats"];

            this.service = Chats;
            $scope.chats = this.service.all();
        }

        _createClass(ChatsCtrl, {
            remove: {
                value: function remove(chat) {
                    this.service.remove(chat);
                }
            }
        });

        return ChatsCtrl;
    })();
});
define("children/AddNewChildCtrl", ["exports"], function (exports) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * Created by andrewphan on 4/14/16.
     */

    var ChildDetailCtrl = exports.ChildDetailCtrl = (function () {
        function ChildDetailCtrl($scope, $stateParams, Children) {
            _classCallCheck(this, ChildDetailCtrl);

            this.$inject = ["$scope", "$stateParams", "Children"];
            $scope.child = Children.get($stateParams.id);
            this.service = Children.get($stateParams.id);;
            $scope.goback();
            {
                var history = $ionicViewService.getBackView();
                $ionicViewService.goToHistoryRoot("002");
            };
        }

        _createClass(ChildDetailCtrl, {
            update: {
                value: function update(child) {
                    this.service = child;
                }
            }
        });

        return ChildDetailCtrl;
    })();
});
define("children/ChildDetailCtrl", ["exports"], function (exports) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * Created by andrewphan on 4/14/16.
     */

    var ChildDetailCtrl = exports.ChildDetailCtrl = (function () {
        function ChildDetailCtrl($scope, $stateParams, Children) {
            _classCallCheck(this, ChildDetailCtrl);

            this.$inject = ["$scope", "$stateParams", "Children"];
            $scope.child = Children.get($stateParams.id);
            this.service = Children.get($stateParams.id);;
        }

        _createClass(ChildDetailCtrl, {
            update: {
                value: function update(child) {
                    this.service = child;
                }
            }
        });

        return ChildDetailCtrl;
    })();
});
define("children/Children", ["exports"], function (exports) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * Created by andrewphan on 4/14/16.
     */
    var children = [{
        id: 0,
        name: "Le Nam Phuong",
        status: "I'm doing well",
        face: "img/yumi.jpg",
        gender: "Girl",
        birthday: "March 10, 2014",
        ageInMonth: "",
        ageInYear: "",
        calldad: "",
        callmom: ""
    }, {
        id: 1,
        name: "Nguyen Sy Son Tung",
        status: "Hey, it's me",
        face: "img/dolphin.jpg",
        gender: "Boy",
        birthday: "March 10, 2014",
        ageInMonth: "",
        ageInYear: "",
        calldad: "",
        callmom: ""
    }, {
        id: 2,
        name: "Nguyen Sy Nam Trung",
        status: "I should buy a boat",
        face: "img/namtrung.jpg",
        gender: "Boy",
        birthday: "March 10, 2014",
        ageInMonth: "",
        ageInYear: "",
        calldad: "",
        callmom: ""
    }, {
        id: 3,
        name: "Tran Phan Minh Khue",
        status: "I should buy a present",
        face: "img/sau.png",
        gender: "Girl",
        birthday: "December 20, 2012",
        ageInMonth: "",
        ageInYear: "",
        calldad: "",
        callmom: ""
    }, {
        id: 4,
        name: "Nguyen Sy Nam Phong",
        status: "I should buy a present",
        face: "",
        gender: "Boy",
        birthday: "December 20, 2012",
        ageInMonth: "",
        ageInYear: "",
        calldad: "",
        callmom: ""
    }];

    var Children = exports.Children = (function () {
        function Children() {
            _classCallCheck(this, Children);
        }

        _createClass(Children, {
            all: {
                value: function all() {
                    return children;
                }
            },
            remove: {
                value: function remove(child) {
                    children.splice(children.indexOf(child), 1);
                }
            },
            get: {
                value: function get(id) {
                    for (var i = 0; i < children.length; i++) {
                        if (children[i].id === parseInt(id)) {
                            return children[i];
                        }
                    }
                    return null;
                }
            }
        });

        return Children;
    })();
});
define("children/ChildrenCtrl", ["exports"], function (exports) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * Created by andrewphan on 4/14/16.
     */

    var ChildrenCtrl = exports.ChildrenCtrl = (function () {
        function ChildrenCtrl($scope, Children) {
            _classCallCheck(this, ChildrenCtrl);

            this.$inject = ["$scope", "Children"];

            this.service = Children;
            $scope.children = this.service.all();
        }

        _createClass(ChildrenCtrl, {
            remove: {
                value: function remove(child) {
                    this.service.remove(child);
                }
            },
            getChildren: {
                value: function getChildren() {
                    this.service.all();
                }
            },
            addAChild: {
                value: function addAChild() {}
            },
            getChild: {
                value: function getChild(id) {
                    this.service.get(id);
                }
            }
        });

        return ChildrenCtrl;
    })();
});
define("dashboard/DashCtrl", ["exports"], function (exports) {
    "use strict";

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var DashCtrl = exports.DashCtrl = function DashCtrl() {
        _classCallCheck(this, DashCtrl);
    };
});
define("app", ["exports", "bootstrap", "router", "chat/Chats", "children/Children", "dashboard/DashCtrl", "chat/ChatsCtrl", "children/ChildrenCtrl", "children/AddNewChildCtrl", "chat/ChatDetailCtrl", "children/ChildDetailCtrl", "account/AccountCtrl"], function (exports, _bootstrap, _router, _chatChats, _childrenChildren, _dashboardDashCtrl, _chatChatsCtrl, _childrenChildrenCtrl, _childrenAddNewChildCtrl, _chatChatDetailCtrl, _childrenChildDetailCtrl, _accountAccountCtrl) {
    // Ionic Starter App

    "use strict";

    var onReady = _bootstrap.onReady;
    var router = _router.router;
    var Chats = _chatChats.Chats;
    var Children = _childrenChildren.Children;
    var DashCtrl = _dashboardDashCtrl.DashCtrl;
    var ChatsCtrl = _chatChatsCtrl.ChatsCtrl;
    var ChildrenCtrl = _childrenChildrenCtrl.ChildrenCtrl;
    var AddNewChildCtrl = _childrenAddNewChildCtrl.AddNewChildCtrl;
    var ChatDetailCtrl = _chatChatDetailCtrl.ChatDetailCtrl;
    var ChildDetailCtrl = _childrenChildDetailCtrl.ChildDetailCtrl;
    var AccountCtrl = _accountAccountCtrl.AccountCtrl;

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    // 'starter.services' is found in services.js
    // 'starter.controllers' is found in controllers.js
    angular.module("starter", ["ionic", "starter.controllers", "starter.services"]).config(router).run(onReady);

    angular.module("starter.controllers", []).controller("DashCtrl", DashCtrl).controller("ChatsCtrl", ChatsCtrl).controller("ChildrenCtrl", ChildrenCtrl).controller("AddNewChildCtrl", AddNewChildCtrl).controller("ChildDetailCtrl", ChildDetailCtrl).controller("ChatDetailCtrl", ChatDetailCtrl).controller("AccountCtrl", AccountCtrl);

    angular.module("starter.services", []).service("Chats", Chats).service("Children", Children);
});
//# sourceMappingURL=all.js.map
