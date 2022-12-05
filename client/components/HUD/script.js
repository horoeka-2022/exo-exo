export default function Script() {
  //GAZES INFORMATIONS AND CLICK VARIABLES
  const cubes = document.querySelectorAll('.cube')
  const dots = document.querySelectorAll('.dot')
  const gazInformation = document.querySelector('.gazes-information')
  let checkedGaz = 0
  //ROTATE MOUSEMOUVE VARIABLES
  const elements = document.querySelectorAll('.dimension-3d')

  //ANGLE METER VARIABLES
  const angleMeter = document.querySelector('.angle-meter')
  const angle = angleMeter.querySelector('.angle-meter span')

  let windowWidth = window.innerWidth
  let windowHeight = window.innerHeight

  for (let i = 0; i < cubes.length; i++) {
    //CONDITIONS FOR GAZ INFORMATION
    cubes[i].addEventListener('click', () => {
      gazInformation.classList.remove('popping')
      dots[checkedGaz].classList.remove('checked')
      checkedGaz = i
      dots[checkedGaz].classList.add('checked')

      setTimeout(function () {
        dots[checkedGaz].classList.remove('checked')
      }, 3000)

      if (checkedGaz == 0) {
        const chargeSize = document
          .querySelector('.charge-1')
          .getBoundingClientRect()
        if (chargeSize.width > 70) {
          gazInformation.innerHTML =
            'OXYGEN level is OK : ' + Math.floor(chargeSize.width / 3.2) + '%'
        } else {
          gazInformation.innerHTML =
            'WARNING ! OXYGEN LEVEL IS ANORMAL : ' +
            Math.floor(chargeSize.width / 3.2) +
            '%'
        }
      } else if (checkedGaz == 1) {
        const chargeSize = document
          .querySelector('.charge-2')
          .getBoundingClientRect()
        if (chargeSize.width < 100) {
          gazInformation.innerHTML =
            'RADIATION level is OK : ' +
            Math.floor(chargeSize.width / 3.2) +
            '%'
        } else {
          gazInformation.innerHTML =
            'WARNING ! RADIATION ANORMAL : ' +
            Math.floor(chargeSize.width / 3.2) +
            '%'
        }
      } else if (checkedGaz == 2) {
        const chargeSize = document
          .querySelector('.charge-3')
          .getBoundingClientRect()
        if (chargeSize.width > 240) {
          gazInformation.innerHTML =
            'OZONE level is OK : ' + Math.floor(chargeSize.width / 3.2) + '%'
        } else {
          gazInformation.innerHTML =
            'WARNING ! OZONE TOO LOW : ' +
            Math.floor(chargeSize.width / 3.2) +
            '%'
        }
      } else if (checkedGaz == 3) {
        const chargeSize = document
          .querySelector('.charge-4')
          .getBoundingClientRect()
        if (chargeSize.width < 280) {
          gazInformation.innerHTML =
            'HUMIDITY level is OK : ' + Math.floor(chargeSize.width / 3.2) + '%'
        } else {
          gazInformation.innerHTML =
            'DID YOU SANK ?! HUMIDITY IS : ' +
            Math.floor(chargeSize.width / 3.2) +
            '%'
        }
      } else {
        const chargeSize = document
          .querySelector('.charge-5')
          .getBoundingClientRect()
        if (chargeSize.width > 260) {
          gazInformation.innerHTML =
            'AZOTE level is OK : ' + Math.floor(chargeSize.width / 3.2) + '%'
        } else {
          gazInformation.innerHTML =
            'WARNING ! AZOTE TOO LOW : ' +
            Math.floor(chargeSize.width / 3.2) +
            '%'
        }
      }
      gazInformation.classList.add('popping')
    })
  }
  //ROTATE MOUSEMOUVE & ANGLE METER
  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
  })

  for (const element of elements) {
    window.addEventListener('mousemove', (_event) => {
      const x = (_event.clientX / window.innerWidth - 0.5) * 20
      const y = (_event.clientY / window.innerHeight - 0.5) * 20
      element.style.transform = `rotateY(${-x}deg) rotateX(${-y}deg) translateX(${x}px) translateY(${y}px`
    })
  }
  window.addEventListener('mousemove', (_event) => {
    const x = (_event.clientX / window.innerWidth - 0.5) * 20
    const y = (_event.clientY / window.innerHeight - 0.5) * 20
    angleMeter.style.transform = `translateY(${y * 45}%)`
    angle.innerHTML = Math.floor(-y * 5) + '°'
  })
}
