window.addEventListener( 'DOMContentLoaded', function() {
	var extensionPos = document.title.lastIndexOf('.')
	if ( !extensionPos ) {
		return;
	}
	var extension = document.title.substr( extensionPos + 1 )
	switch ( extension ) {
		case 'mov':
			var videoPlayer = document.createElement( 'video' )
			videoPlayer.controls = true
			videoPlayer.src = document.querySelector( '.download a').href

			videoPlayer.addEventListener( 'loadedmetadata', function() {
				document.getElementById('wrapper').style.width = ( this.videoWidth + 74 ) + 'px'
			}, false )
			
			var container = document.querySelector( '#container .item' )
			container.appendChild( videoPlayer )

			document.querySelector('h1').style.marginBottom = '20px'
			break;
		default:
			// do nothing
			break;
	}
}, false );