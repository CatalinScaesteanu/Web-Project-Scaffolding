// object literal
const dog = (() => {
  let name = 'Rex'
  const sound = 'woooff'

  return {
    sayName: () => {
      return console.log(name)
    },
    setName: (newName) => {
      return name = newName
    },
    talk: () => console.log(sound)
  }
})()
