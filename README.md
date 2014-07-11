ngUploadPreview
===============

1- Add the script in public_html/js/ngUploadPreview.js on your html.

2- Add `file-model='myFile'` in your form

3- Add a canvas element with ID 'canvas'

4- In your controller inject the UploadSrv, and in uploadFileToUrl method put $scope.myFile, and url of server for upload.

See `public_html/index.html` for example.