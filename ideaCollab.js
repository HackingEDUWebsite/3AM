var myDataRef = new Firebase('https://pr9laseml9o.firebaseio-demo.com/');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          //[ADD SET() HERE]
          $('#messageInput').val('');
        }
      });