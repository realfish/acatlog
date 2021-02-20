export default function () {

let doc = document;
let win = window;

win.addEventListener('load', () => {
	setTimeout(() => {
		let $header = doc.querySelector('.header');
		$header.classList.add('is-loaded');
	}, 1500);
});

}
