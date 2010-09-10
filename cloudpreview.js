var useAutoZoom = true;
/*
safari.self.tab.dispatchMessage('valueForSetting', 'autozoom');
safari.self.addEventListener('message', function(event) {
	if (event.name != 'setValueForSetting' || event.message.key != 'autozoom') {
		return;
	}
	
	useAutoZoom = event.message.value;
}, false);
*/
window.addEventListener('DOMContentLoaded', function() {
	var extensionPos = document.title.lastIndexOf('.');
	if (extensionPos) {
		var extension = document.title.substr(extensionPos + 1);
		switch (extension) {
			case 'mov':
				var videoPlayer = document.createElement('video');
				videoPlayer.controls = true;
				videoPlayer.src = document.querySelector('.download a').href;

				videoPlayer.addEventListener('loadedmetadata', function() {
					document.getElementById('wrapper').style.width = (this.videoWidth + 74) + 'px'
				}, false);
			
				var container = document.querySelector('#container .item')
				container.appendChild(videoPlayer)
				return;
				
			 case 'mp3':
			 	var audioPlayer = document.createElement('audio');
				audioPlayer.controls = true;
				audioPlayer.src = document.querySelector('.download a').href;
				
				var container = document.querySelector('#container .item')
				container.appendChild(audioPlayer);
				return;
				
			case 'ogg':
			 	var audioPlayer = document.createElement('audio');
				audioPlayer.controls = true;
				audioPlayer.src = document.querySelector('.download a').href;
				
				var container = document.querySelector('#container .item')
				container.appendChild(audioPlayer);
				return;
				
			default:
				// do nothing
				break;
		}
	}
	
	var firstElementInContainer = document.querySelector('#container > *:first-of-type');
	if ('IMG' == firstElementInContainer.tagName) {
		var zoom = document.createElement('button')
		zoom.id = 'zoom'

		zoom.addEventListener('click', function() {
			if (zoom.className != 'fitted') {
				zoom.className = 'fitted';
				firstElementInContainer.style.width = '100%';
				//firstElementInContainer.className = 'fitted'
			} 
			else {
				zoom.className = '';
				//firstElementInContainer.className = ''
				firstElementInContainer.style.width = '' + firstElementInContainer.naturalWidth + 'px';
			}
		}, false);

		var zoomContainer = document.createElement('div');
		zoomContainer.id = 'zoomContainer';
		zoomContainer.appendChild(zoom);

		document.querySelector('#container').appendChild(zoomContainer);

		if (useAutoZoom) {
			var imageSizeTimeout = window.setInterval(function() {
				if (firstElementInContainer.naturalWidth == 0) {
					return;
				}

				window.clearInterval(imageSizeTimeout);
				
				if (firstElementInContainer.naturalWidth > self.innerWidth - 20) {
					zoom.className = 'fitted';
					//firstElementInContainer.className = 'fitted'
					firstElementInContainer.style.width = '100%';					
				}
			}, 100);
		}
	}
}, false);