class AddChannel extends HTMLElement {
	constructor() {
	  super();
	}
	async connectedCallback() {
		// Fetch HTML
		const htmlResponse = await fetch('../views/add-channel.html');
		const htmlContent = await htmlResponse.text();
	
		// Fetch CSS
		const cssResponse = await fetch('../assets/css/add-channel.css');
		const cssContent = await cssResponse.text();

		// Fetch JavaScript
		// const jsResponse = await fetch('../scripts/add-friend.js');
		// const jsContent = await jsResponse.text();
	
		// Append CSS to the shadow DOM
		const style = document.createElement('style');
		style.textContent = cssContent;
	
		// Append JS to the shadow DOM
		// const script = document.createElement('script');
		// script.textContent = jsContent;

		// Set inner HTML
		this.innerHTML = htmlContent;
		this.appendChild(style);
		// this.appendChild(script);

		// Execute the JavaScript logic for the chat, passing `this` as the component
		// const scriptFunction = new Function('component', jsContent);
		// scriptFunction(this); // Pass the component instance to the script

		// Dispatch an event to notify that the content is ready
		this.dispatchEvent(new CustomEvent('content-loaded', { bubbles: true, composed: true }));
		
	  }
  }
  customElements.define('add-channel-component', AddChannel);
  