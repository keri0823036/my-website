export function scrollToElement(selector, delay = 0) {
  const scroll = () => {
    const $current = document.querySelector(selector)

    if ($current) {
      const windowHeight = window.innerHeight
      let $ele = $current
      let offsetTop = 0

      do {
        offsetTop += $ele.offsetTop
      } while (($ele = $ele.offsetParent))

      let offset = offsetTop
      offset =
        $current.clientHeight > windowHeight
          ? offset
          : offset -
            (windowHeight - $current.clientHeight) / 2 

      window.scroll({ top: offset, behavior: 'smooth' })
    } else {
      console.warn(selector, 'does not exist.')
    }
  }

  setTimeout(() => {
    scroll()
  }, delay)
}