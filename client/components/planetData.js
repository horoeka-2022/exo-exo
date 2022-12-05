const random = (a, b) => a + Math.random() * b
const randomInt = (a, b) => Math.floor(random(a, b))
const randomColor = () =>
  `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`

const planetData = []
const totalPlanets = 7
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    color: randomColor(),
    xRadius: (index + 1.5) * 6,
    zRadius: (index + 1.5) * 3,
    size: random(1, 1.5, 2),
  })
}

export default planetData
