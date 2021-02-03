const data = [
  {
    id: 323,
    username: 'rinood30',
    profile: {
      full_name: 'Shabrina Fauzan',
      birthday: '1988-10-30',
      phones: [
        '08133473821',
        '082539163912'
      ]
    },
    'articles:': [
      {
        id: 3,
        title: 'Tips Berbagi Makanan',
        published_at: '2019-01-03T16:00:00'
      },
      {
        id: 7,
        title: 'Cara Membakar Ikan',
        published_at: '2019-01-07T14:00:00'
      }
    ]
  },
  {
    id: 201,
    username: 'norisa',
    profile: {
      full_name: 'Noor Annisa',
      birthday: '1986-08-14',
      phones: []
    },
    'articles:': [
      {
        id: 82,
        title: 'Cara Membuat Kue Kering',
        published_at: '2019-10-08T11:00:00'
      },
      {
        id: 91,
        title: 'Cara Membuat Brownies',
        published_at: '2019-11-11T13:00:00'
      },
      {
        id: 31,
        title: 'Cara Membuat Brownies',
        published_at: '2019-11-11T13:00:00'
      }
    ]
  },
  {
    id: 42,
    username: 'karina',
    profile: {
      full_name: 'Karina Triandini',
      birthday: '1986-04-14',
      phones: [
        '06133929341'
      ]
    },
    'articles:': []
  },
  {
    id: 201,
    username: 'icha',
    profile: {
      full_name: 'Annisa Rachmawaty',
      birthday: '1987-12-30',
      phones: []
    },
    'articles:': [
      {
        id: 39,
        title: 'Tips Berbelanja Bulan Tua',
        published_at: '2019-04-06T07:00:00'
      },
      {
        id: 43,
        title: 'Cara Memilih Permainan di Steam',
        published_at: '2019-06-11T05:00:00'
      },
      {
        id: 58,
        title: 'Cara Membuat Brownies',
        published_at: '2019-09-12T04:00:00'
      }
    ]
  }
]

function noPhone () {
  data.map(x => {
    if (x.profile.phones.length === 0) {
      console.log(x)
    }
  })
}

function haveArticle () {
  data.map(x => {
    if (x['articles:'].length > 0) {
      console.log(x)
    }
  })
}

function findAnnis () {
  data.map(x => {
    if (x.username.includes('Annis' || 'annis') || x.profile.full_name.includes('Annis' || 'annis')) {
      console.log(x)
    }
  })
}

function findArticle () {
  data.map(x => {
    if (x['articles:'].length > 0) {
      x['articles:'].map(y => {
        if (y.published_at.includes('2020')) {
          console.log(x)
        }
      })
    }
  })
}

function findBorn () {
  data.map(x => {
    if (x.profile.birthday.includes('1986')) {
      console.log(x)
    }
  })
}

function findTips () {
  data.map(x => {
    if (x['articles:'].length > 0) {
      x['articles:'].map(y => {
        if (y.title.includes('Tips')) {
          console.log(y)
        }
      })
    }
  })
}

function beforeAugust () {
  data.map(x => {
    if (x['articles:'].length > 0) {
      x['articles:'].map(y => {
        // console.log(parseInt(y.published_at.slice(0, 4)) + ' ' + parseInt(y.published_at.slice(5, 7)))
        if (parseInt(y.published_at.slice(0, 4)) <= 2019) {
          if (parseInt(y.published_at.slice(5, 7)) < 8) {
            console.log(y)
          }
        }
      })
    }
  })
}

beforeAugust()
