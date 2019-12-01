$('#fileupload').fileupload({
  dataType: 'json',
  url: '/backup/import/',
  autoUpload: true,
  add: function (e, data) {
      var goUpload = true;
      var uploadFile = data.files[0];
      if (!(/\.(xls|xlsx)$/i).test(uploadFile.name)) {
          alert('You can only import Excel (xls or xlsx) files');
          goUpload = false;
      }
      if (uploadFile.size > 90000000) { // 10mb
          alert('File size cannot be more than 90 mb');
          goUpload = false;
      }
      if (goUpload == true) {
          data.submit();
      }
  },
  done: function (e, data) {
      //location.reload(true);
      console.log(data.result.result);
      window.location='/event';
      

  }
}).on('fileuploadprogressall', function (e, data) {
  var progress = parseInt(data.loaded / data.total * 100, 10);
  $('.progress .progress-bar').css('width', progress + '%');

  if (progress === 100) {
    $('.progress-bar').html('Please wait while data is being processed...');
  }
});