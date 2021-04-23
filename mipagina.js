let openMenu = true;
	document.querySelector('#menu').addEventListener(
		'click', () => {
			document.querySelector('.menu').classList.toggle('openMenu');
			if (openMenu) {
				document.querySelector('#menu').innerHTML = '&times;'
				openMenu = false;
			} else {
				document.querySelector('#menu').innerHTML = '&equiv;'
				openMenu = true;
			}
		}
	);