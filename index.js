const KEY_VISIT_COUNT = 'kgnx_visit-count'

window.addEventListener('load', (e) => {
  const msg = document.querySelector('#msg')

  const lastVisit = window.localStorage.getItem(KEY_VISIT_COUNT)
  const firstTime = lastVisit === null || lastVisit === Number(0).toFixed()
  const currentVisit = firstTime ? 1 : parseInt(lastVisit) + 1

  window.localStorage.setItem(KEY_VISIT_COUNT, currentVisit.toFixed())

  msg.appendChild(
    document.createTextNode(`あなたは今回、${firstTime ? '初めて' : `${currentVisit.toFixed()}回目`}の訪問ですね！`)
  )
})
