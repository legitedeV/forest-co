const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, '..', 'data', 'products.json')

const products = [
  {
    id: 'prod_1',
    handle: 'lesne-grzyby',
    title: 'Leśne grzyby suszone',
    subtitle: 'Borowiki i podgrzybki premium',
    description: 'Selekcja suszonych grzybów z polskich lasów.',
    metadata: { category: 'grzyby' }
  },
  {
    id: 'prod_2',
    handle: 'miod-spadziowy',
    title: 'Miód spadziowy',
    subtitle: 'Naturalny miód leśny',
    description: 'Gęsty miód spadziowy z lokalnych pasiek.',
    metadata: { category: 'miody' }
  },
  {
    id: 'prod_3',
    handle: 'herbata-ziolowa',
    title: 'Herbata ziołowa',
    subtitle: 'Leśne zioła',
    description: 'Mieszanka ziół wspierająca odporność.',
    metadata: { category: 'napary' }
  },
  {
    id: 'prod_4',
    handle: 'syrop-sosnowy',
    title: 'Syrop sosnowy',
    subtitle: 'Syrop z młodych pędów sosny',
    description: 'Aromatyczny syrop dla barów i kawiarni.',
    metadata: { category: 'syropy' }
  },
  {
    id: 'prod_5',
    handle: 'konfitura-z-jagody',
    title: 'Konfitura z jagody',
    subtitle: 'Rzemieślnicza konfitura',
    description: 'Słodka konfitura jagodowa do deserów i śniadań.',
    metadata: { category: 'konfitury' }
  }
]

fs.mkdirSync(path.dirname(dataPath), { recursive: true })
fs.writeFileSync(dataPath, JSON.stringify(products, null, 2))
console.log('Seeded products:', products.length)
