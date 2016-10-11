/**
 * Created by andrewphan on 4/14/16.
 */
export class ChildDetailCtrl {
    constructor($scope, $stateParams, Children) {
        this.$inject = ['$scope', '$stateParams', 'Children'];
        $scope.child = Children.get($stateParams.id);
        this.service = Children.get($stateParams.id);;
        $scope.goback()
        {
            var history = $ionicViewService.getBackView();
            $ionicViewService.goToHistoryRoot("002");
        };
    }

    update(child){
        this.service = child;
    }
}
