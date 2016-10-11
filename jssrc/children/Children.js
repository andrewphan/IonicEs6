/**
 * Created by andrewphan on 4/14/16.
 */
var children = [{
    id: 0,
    name: 'Le Nam Phuong',
    status: 'I\'m doing well',
    face: 'img/yumi.jpg',
    gender: 'Girl',
    birthday: 'March 10, 2014',
    ageInMonth: '',
    ageInYear: '',
    calldad: '',
    callmom: ''
}, {
    id: 1,
    name: 'Nguyen Sy Son Tung',
    status: 'Hey, it\'s me',
    face: 'img/dolphin.jpg',
    gender: 'Boy',
    birthday: 'March 10, 2014',
    ageInMonth: '',
    ageInYear: '',
    calldad: '',
    callmom: ''
}, {
    id: 2,
    name: 'Nguyen Sy Nam Trung',
    status: 'I should buy a boat',
    face: 'img/namtrung.jpg',
    gender: 'Boy',
    birthday: 'March 10, 2014',
    ageInMonth: '',
    ageInYear: '',
    calldad: '',
    callmom: ''
}, {
    id: 3,
    name: 'Tran Phan Minh Khue',
    status: 'I should buy a present',
    face: 'img/sau.png',
    gender: 'Girl',
    birthday: 'December 20, 2012',
    ageInMonth: '',
    ageInYear: '',
    calldad: '',
    callmom: ''
}, {
    id: 4,
    name: 'Nguyen Sy Nam Phong',
    status: 'I should buy a present',
    face: '',
    gender: 'Boy',
    birthday: 'December 20, 2012',
    ageInMonth: '',
    ageInYear: '',
    calldad: '',
    callmom: ''
}];

export class Children{
    constructor(){}
    all(){
        return children;
    }

    remove(child) {
        children.splice(children.indexOf(child), 1);
    }

    get(id) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].id === parseInt(id)) {
                return children[i];
            }
        }
        return null;
    }
}