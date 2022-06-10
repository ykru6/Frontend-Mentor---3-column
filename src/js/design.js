const SHOW_DESIGN = 'show-design';

document.addEventListener('DOMContentLoaded', e => {
	const showDesign = sessionStorage.getItem(SHOW_DESIGN) === 'true';
	setDesignVisibility(showDesign);
});

document.addEventListener('keydown', e => {
	if (e.ctrlKey && e.code === 'KeyD') {
		e.preventDefault();
		e.stopPropagation();

		toggleDesignVisibility();
	}
});

function toggleDesignVisibility() {
	const designImage = document.querySelector('.design');
	if (designImage.style.display === 'none') {
		designImage.style.display = 'block';
		sessionStorage.setItem(SHOW_DESIGN, true);
	} else {
		designImage.style.display = 'none';
		sessionStorage.setItem(SHOW_DESIGN, false);
	}
}

function setDesignVisibility(visible) {
	const designImage = document.querySelector('.design');
	if (visible) {
		designImage.style.display = 'block';
	} else {
		designImage.style.display = 'none';
	}

	sessionStorage.setItem(SHOW_DESIGN, visible);
}