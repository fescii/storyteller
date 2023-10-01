const tabs = document.querySelectorAll('body > main.main > section.sidebar > .menu > ul.menu-items > li.item')
let activeTab = document.querySelector('body > main.main > section.sidebar > .menu > ul.menu-items > li.item.active')
const contentContainer = document.querySelector('body > main.main > section.content > #content-container')

const content = {}

content.overview = `
  <stat-container bookings="163" date="Sep 23" completed="57" upcoming="33" cancelled="8" visitors="1,400"
    interactions="1,360">
  </stat-container>

`

content.schedules = `
  <schedule-container url="some-link">
  </schedule-container>
`

content.bookings = `
  

`

if (tabs && contentContainer && activeTab) {
  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()

      activeTab.classList.remove('active')
      tab.classList.add('active')
      activeTab = tab
    })
  })
}

const populateContent = (contentContainer, content) => {
  contentContainer.innerHTML = content
}