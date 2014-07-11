angular.module('ngUploadPreview', [])
        .directive('fileModel', ['$parse', function($parse) {
                return {
                    restrict: 'A',
                    link: function(scope, element, attrs) {
                        var model = $parse(attrs.fileModel);
                        var modelSetter = model.assign;
                        element.bind('change', function() {
                            scope.$apply(function() {
                                modelSetter(scope, element[0].files[0]);
                                var c = document.getElementById('canvas');
                                var ctx = c.getContext('2d');
                                ctx.clearRect(0, 0, c.width, c.height);
                                var img = new Image();
                                img.src = URL.createObjectURL(scope.myFile);
                                img.onload = function() {
                                    ctx.drawImage(img, 0, 0);
                                }
                            });
                        });
                    }
                }
            }])
        .service('UploadSrv', ['$http', function($http) {
                this.uploadFileToUrl = function(file, uploadUrl) {
                    var fd = new FormData();
                    fd.append('file', file);
                    $http.post(uploadUrl, fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })
                            .success(function() {
                            })
                            .error(function() {
                            });
                }
            }]);
