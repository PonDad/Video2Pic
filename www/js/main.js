    $("#file").click(function() {
      $("video").attr("poster", "");
    });
    $("#file").change(function() {
      for (var i = 0; i < this.files.length; i++) {
        $("video").attr("src", URL.createObjectURL(this.files[i]));
      }
    });
    $(function() {
      mVideo = document.getElementById("video");
      $('#play').click(function() {
        mVideo.play();
      });
      $('#pause').click(function() {
        mVideo.pause();
      });
      $('#reset').click(function() {
        mVideo.pause();
        mVideo.currentTime = 0;
      });
      $('#skip').click(function() {
        mVideo.currentTime += 1;
      });
      $('#back').click(function() {
        mVideo.currentTime -= 1;
      });
      mVideo.addEventListener("timeupdate", function() {
        var now = mVideo.currentTime.toFixed(2);
        var all = mVideo.duration.toFixed(2);
        $('#now').html('Current Time：' + now + 's');
        $('#all').html('Total Time：' + all + 's');
      });
    });
    var captureButton = document.querySelector('#capture');
    captureButton.addEventListener('click', capture, false);

    function capture() {
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      var video_img = document.querySelector("video");
      canvas.width = video_img.videoWidth;
      canvas.height = video_img.videoHeight;
      context.drawImage(video_img, 0, 0);
      //文字を入れるときはこんな感じで
      /* 
	    context.font = "40pt  sans-serif";
		context.fillStyle = "white";
		context.textAlign = "center";
		context.shadowColor = "black";
	  　context.shadowBlur  = 8;
	  　context.shadowOffsetX = 4;
	  　context.shadowOffsetY = 4;
		context.fillText("タイトル",video_img.width/2, video_img.height/2);
	 */
      var jpeg_img = document.getElementById("output");
      jpeg_img.src = canvas.toDataURL("image/jpeg", 0.8);
      var button = document.getElementById('btn-download');
      button.addEventListener('click', function(e) {
        button.href = jpeg_img.src;
      });
    }
    var captureButton2 = document.querySelector('#capture2');
    captureButton2.addEventListener('click', capture2, false);

    function capture2() {
      var canvas2 = document.createElement("canvas");
      var context2 = canvas2.getContext("2d");
      var video_img = document.querySelector("video");
      canvas2.width = video_img.videoHeight * 1.5;
      canvas2.height = video_img.videoHeight;
      context2.drawImage(video_img, (video_img.videoWidth - video_img.videoHeight *
          1.5) / 2, 0, video_img.videoHeight * 1.5, video_img.videoHeight,
        0, 0, video_img.videoHeight * 1.5, video_img.videoHeight);
      //文字を入れるときはこんな感じで
      /* 
	    context.font = "40pt  sans-serif";
		context.fillStyle = "white";
		context.textAlign = "center";
		context.shadowColor = "black";
	  　context.shadowBlur  = 8;
	  　context.shadowOffsetX = 4;
	  　context.shadowOffsetY = 4;
		context.fillText("タイトル",video_img.width/2, video_img.height/2);
	 */
      var jpeg_img2 = document.getElementById("output2");
      jpeg_img2.src = canvas2.toDataURL("image/jpeg", 0.8);
      var button2 = document.getElementById('btn-download2');
      button2.addEventListener('click', function(e) {
        button2.href = jpeg_img2.src;
      });
    }
    $("#photo").click(function() {
      $("#capture, #output, #btn-download").css("display", "none");
      $("#capture2, #output2, #btn-download2").css("display", "inline");
    });
    $("#4khd").click(function() {
      $("#capture, #output, #btn-download").css("display", "inline");
      $("#capture2, #output2, #btn-download2").css("display", "none");
    });