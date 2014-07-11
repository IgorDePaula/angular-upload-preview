var app = angular.module('test',['ngUploadPreview']);
app.controller('UploadCtrl',function($scope,UploadSrv){
    $scope.up = function(){
        var url = 'http://localhost/Testes/upload.php';
        var file = $scope.myFile;
         UploadSrv.uploadFileToUrl(file,url);
    };
});