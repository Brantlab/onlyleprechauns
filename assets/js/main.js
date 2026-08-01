const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('#main-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
document.querySelector('#booking-form')?.addEventListener('submit',event=>{event.preventDefault();const note=event.currentTarget.querySelector('.form-note');note.textContent='Call received. Our coordinator will be in touch shortly.';note.classList.add('success');event.currentTarget.reset()});
