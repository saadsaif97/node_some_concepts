const evt = {
  name: 'Birthday party',
  guests: ['ding', 'dong', 'ding dong'],
  printGuestList() {
    console.log(`Guests for ${this.name}:`)
    this.guests.forEach((guest) => console.log(guest))
  },
}

evt.printGuestList()
