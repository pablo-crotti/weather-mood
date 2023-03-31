import { renderGeneration } from './sections/generation'



const toggleNav = (hash) => {
  document.querySelector(`nav a.active`)?.classList.remove('active')
  document.querySelector(`nav a[href="${hash}"]`)?.classList.add('active')
}

const toggleSection = (hash) => {
  document.querySelector(`section.active`)?.classList.remove('active')
  document.querySelector(`${hash}-section`)?.classList.add('active')
}

const displaySection = (hash) => {
  if(hash == '') hash = '#generation'

  const hashSplit = hash.split('-')

  toggleNav(hashSplit[0])
  toggleSection(hashSplit[0])

  switch (hashSplit[0]) {
    case '#generation':
      renderGeneration()
      break;
  
    default:
      break;
  }
}

window.addEventListener('hashchange', () => displaySection(window.location.hash))
displaySection(window.location.hash)

navigator.serviceWorker.register(new URL('workerCacheFetched.js', import.meta.url))