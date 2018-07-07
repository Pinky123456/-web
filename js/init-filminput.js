
function initFileInput_video(ctrlName, uploadUrl) {
            var control = $('#' + ctrlName);
            control.fileinput({
                resizeImage : true,
                maxImageWidth : 200,
                maxImageHeight : 400,
                resizePreference : 'width',
                language : 'zh', //设置语言
                uploadUrl : uploadUrl,
                uploadAsync : true,
                allowedFileExtensions : [ 'jpg', 'png', 'gif' ],//接收的文件后缀
                showUpload : true, //是否显示上传按钮
                showCaption : true,//是否显示标题
                browseClass : "btn btn-primary", //按钮样式
                previewFileIcon : "<i class='glyphicon glyphicon-king'></i>",
                maxFileCount : 3,
                msgFilesTooMany : "选择图片超过了最大数量",
                maxFileSize : 2000,
            });
        };
     //初始化控件initFileInput(id,uploadurl)控件id，与上传路径
// initFileInput_video("file-video", "E:/pushMessAction");