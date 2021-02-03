const data = [
    {
      "inventory_id": 9382,
      "name": "Brown Chair",
      "type": "furniture",
      "tags": [
        "chair",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190471,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 9380,
      "name": "Big Desk",
      "type": "furniture",
      "tags": [
        "desk",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190642,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 2932,
      "name": "LG Monitor 50 inch",
      "type": "electronic",
      "tags": [
        "monitor"
      ],
      "purchased_at": 1579017842,
      "placement": {
        "room_id": 3,
        "name": "Lavender"
      }
    },
    {
      "inventory_id": 232,
      "name": "Sharp Pendingin Ruangan 2PK",
      "type": "electronic",
      "tags": [
        "ac"
      ],
      "purchased_at": 1578931442,
      "placement": {
        "room_id": 5,
        "name": "Dhanapala"
      }
    },
    {
      "inventory_id": 9382,
      "name": "Alat Makan",
      "type": "tableware",
      "tags": [
        "spoon",
        "fork",
        "tableware"
      ],
      "purchased_at": 1578672242,
      "placement": {
        "room_id": 10,
        "name": "Rajawali"
      }
    }
  ]


function taskOne() {
    data.map(x => {
        if (x.placement.name.includes('Meeting Room')) {
            console.log(x)            
        }
    })
}

function taskTwo() {
    data.map(x => {
        if (x.type.includes('electronic')) {
            console.log(x.name)
        }
    })
}

function taskThree() {
    data.map(x => {
        if (x.type.includes('furniture')) {
            console.log(x)
        }
    })
}

function taskFour() {
    data.map(x => {
        let testDate = new Date(x.purchased_at * 1000)[Symbol.toPrimitive]('string');
        if (testDate.includes('Jan 16 2020')) {
            console.log(x)
        }
    })
}

function taskFive() {
    data.map(x => {
        x.tags.map(y => {
            if (y === 'brown') {
                console.log(x)
            }
        })
    })
}

taskFive()
