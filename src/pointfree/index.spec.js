const test = require('tape')

const index = require('.')

const alt = require('./alt')
const ap = require('./ap')
const bimap = require('./bimap')
const both = require('./both')
const chain = require('./chain')
const coalesce = require('./coalesce')
const compareWith = require('./compareWith')
const concat = require('./concat')
const cons = require('./cons')
const contramap = require('./contramap')
const either = require('./either')
const empty = require('./empty')
const equals = require('./equals')
const evalWith = require('../State/evalWith')
const execWith = require('../State/execWith')
const extend = require('./extend')
const filter = require('./filter')
const first = require('./first')
const fold = require('./fold')
const foldMap = require('./foldMap')
const fst = require('../Pair/fst')
const head = require('./head')
const log = require('../Writer/log')
const nmap = require('../Tuple/nmap')
const map = require('./map')
const merge = require('../pointfree/merge')
const option = require('./option')
const project = require('./project')
const promap = require('./promap')
const race = require('../Async/race')
const read = require('../Writer/read')
const reduce = require('./reduce')
const reduceRight = require('./reduceRight')
const reject = require('./reject')
const run = require('./run')
const runWith = require('./runWith')
const second = require('./second')
const sequence = require('./sequence')
const snd = require('../Pair/snd')
const swap = require('./swap')
const tail = require('./tail')
const toPromise = require('./toPromise')
const traverse = require('./traverse')
const valueOf = require('./valueOf')

test('pointfree entry', t => {
  t.equal(index.alt, alt, 'provides the alt pointfree')
  t.equal(index.ap, ap, 'provides the ap pointfree')
  t.equal(index.bimap, bimap, 'provides the bimap pointfree')
  t.equal(index.both, both, 'provides the both pointfree')
  t.equal(index.chain, chain, 'provides the chain pointfree')
  t.equal(index.compareWith, compareWith, 'provides the compareWith pointfree')
  t.equal(index.coalesce, coalesce, 'provides the coalesce pointfree')
  t.equal(index.concat, concat, 'provides the concat pointfree')
  t.equal(index.cons, cons, 'provides the cons pointfree')
  t.equal(index.contramap, contramap, 'provides the contramap pointfree')
  t.equal(index.either, either, 'provides the either pointfree')
  t.equal(index.empty, empty, 'provides the empty pointfree')
  t.equal(index.equals, equals, 'provides the equals pointfree')
  t.equal(index.evalWith, evalWith, 'provides the evalWith pointfree')
  t.equal(index.execWith, execWith, 'provides the execWith pointfree')
  t.equal(index.extend, extend, 'provides the extend pointfree')
  t.equal(index.filter, filter, 'provides the filter pointfree')
  t.equal(index.first, first, 'provides the first pointfree')
  t.equal(index.fold, fold, 'provides the fold pointfree')
  t.equal(index.foldMap, foldMap, 'provides the foldMap pointfree')
  t.equal(index.fst, fst, 'provides the fst pointfree')
  t.equal(index.head, head, 'provides the head pointfree')
  t.equal(index.log, log, 'provides the log pointfree')
  t.equal(index.nmap, nmap, 'provides the nmap pointfree')
  t.equal(index.map, map, 'provides the map pointfree')
  t.equal(index.merge, merge, 'provides the merge pointfree')
  t.equal(index.option, option, 'provides the option pointfree')
  t.equal(index.project, project, 'provides the project pointfree')
  t.equal(index.promap, promap, 'provides the promap pointfree')
  t.equal(index.race, race, 'provides the race pointfree')
  t.equal(index.read, read, 'provides the read pointfree')
  t.equal(index.reduce, reduce, 'provides the reduce pointfree')
  t.equal(index.reduceRight, reduceRight, 'provides the reduceRight pointfree')
  t.equal(index.reject, reject, 'provides the reject pointfree')
  t.equal(index.run, run, 'provides the run pointfree')
  t.equal(index.runWith, runWith, 'provides the runWith pointfree')
  t.equal(index.second, second, 'provides the second pointfree')
  t.equal(index.sequence, sequence, 'provides the sequence pointfree')
  t.equal(index.snd, snd, 'provides the snd pointfree')
  t.equal(index.swap, swap, 'provides the swap pointfree')
  t.equal(index.tail, tail, 'provides the tail pointfree')
  t.equal(index.toPromise, toPromise, 'provides the toPromise pointfree')
  t.equal(index.traverse, traverse, 'provides the traverse pointfree')
  t.equal(index.valueOf, valueOf, 'provides the valueOf pointfree')

  t.end()
})
