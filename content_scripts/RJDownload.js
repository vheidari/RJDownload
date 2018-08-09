var soundLocation = "https://host2.rjmusicmedia.com/media/mp3/mp3-256/";

window.addEventListener('load', function(){
	// todo
	console.log(location.pathname);
	
    
}
);




document.onreadystatechange  = function()
{
	if(document.readyState == "complete")
	{	
        // create button and style
		var creatButtonElement = document.createElement('div');
		var buttonText  =  document.createTextNode("Download Music");
		creatButtonElement.appendChild(buttonText);
		creatButtonElement.setAttribute("style", "background-color: #8606fe; width: 100%; position: relative; top: 0px; padding: 15px; text-align: center; font-weight: 700; cursor: pointer;");
		creatButtonElement.setAttribute("id", "rjdownload");
		
        // listen for click on Download Music button
        creatButtonElement.onclick  = function(){ 
            var getPath         = location.pathname;
            var parsePath       = getPath.split("/");
            var getNameOfSound  = parsePath[3] + ".mp3";
            var soundFullPath   = soundLocation + getNameOfSound;
            
            //strart download file 
            downloadSoundFile(soundFullPath, getNameOfSound);

            //download(soundFullPath, "hello.mp3", "audio/*");
            
        };
		
		
		// get panel location and append button
		var getPanelElement = document.getElementById('song_info_panel');
		getPanelElement.insertBefore(creatButtonElement, getPanelElement.childNodes[0]);

	}
}


// todo:
//  - problem to find host1 or host2 now only work on host2
// start downloading file
function downloadSoundFile(soundFullPath, getNameOfSound)
{
    console.log(soundFullPath);

//    var x=new XMLHttpRequest();
//    x.open( "GET", soundFullPath , true);
//    x.responseType="blob";
//    x.onload= function(e){download(e.target.result, getNameOfSound, "sound/*");};
//    x.send();
//    
    var x = new XMLHttpRequest();
    x.open("GET", soundFullPath, true);
    x.responseType = 'blob';
    x.onload  = function()
    {
        var soundFile =  new FileReader();
        soundFile.readAsDataURL(x.response);
        soundFile.onload = function(e){
            download(e.target.result, getNameOfSound, "sound/*");
        };
    };
    x.send();

}

var rjBackground = document.getElementById('latest_container');
rjBackground.style.backgroundColor = "blue";


