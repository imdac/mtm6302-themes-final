const themes = {
  light: {
    title: 'Light',
    class: 'light',
    font: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap'
  },
  dark: {
    title: 'Dark',
    class: 'dark',
    font: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap'
  },
  pink: {
    title: 'Pink',
    class: 'pink',
    font: 'https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap'
  }
}

const $font = document.getElementById('font')
const $body = document.querySelector('body')
const $themes = document.getElementById('themes')

function setTheme (theme) {
  $body.className = theme.class
  $font.href = theme.font
}

const ls = localStorage.getItem('theme')

if (ls) {
  setTheme(themes[ls])
} else {
  setTheme(themes.light)
}

const html = []

for (const theme in themes) {
  if (theme === ls) {
    html.push(`<option value="${theme}" selected>${themes[theme].title}</option>`)
  } else {
    html.push(`<option value="${theme}">${themes[theme].title}</option>`)
  }
}

$themes.innerHTML = html.join('')

$themes.addEventListener('change', function () {
  const theme = themes[$themes.value]

  localStorage.setItem('theme', $themes.value)

  setTheme(theme)
})
