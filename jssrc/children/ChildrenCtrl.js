/**
 * Created by andrewphan on 4/14/16.
 */
export class ChildrenCtrl{
    constructor($scope, Children){
        this.$inject = ['$scope','Children'];

        this.service = Children;
        $scope.children = this.service.all();
    }

    remove(child){
        this.service.remove(child);
    }

    getChildren(){
        this.service.all();
    }

    addAChild(){

    }

    getChild(id){
        this.service.get(id);
    }
}