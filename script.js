document.addEventListener('DOMContentLoaded', () => {
  let people = [
    {
      name: 'Devid',
      pfp: 'pfps/devid.png',
      url: ''
    },
    {
      name: 'MayMay',
      pfp: 'pfps/may.png',
    },
    {
      name: 'MiloDev123',
      pfp: 'pfps/milo.gif',
    },
    {
      name: 'Drago Cuven',
      pfp: 'pfps/drago.png',
    },
    {
      name: 'Juniper',
      pfp: 'pfps/juniper.png',
    }
  ]

  let peopleContainer = document.getElementById('people')

  people.forEach(person => {
    let personElement = document.createElement('div')
    personElement.classList.add('person')
    personElement.innerHTML = `
      <img width="100px" height="100px" src="${person.pfp}" alt="${person.name}">
      <p>${person.name}</p>
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    `
    if (person.url) {
      personElement.style.cursor = 'pointer'
      personElement.addEventListener('click', () => {
        window.location.href = person.url
      })
    }
    peopleContainer.appendChild(personElement)
  })
})