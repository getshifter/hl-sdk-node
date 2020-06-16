import { Shifter } from '../src';


describe('index.ts', () => {
  describe('| Shifter class', () => {
    let client: Shifter
    beforeEach(() => {
      client = new Shifter({
        token: 'DUMMY'
      })
    })
    it('Should site client defined', () => {
      expect(client.sites).not.toEqual(undefined)
    })
    it('Should siteServices client defined', () => {
      expect(client.siteServices).not.toEqual(undefined)
    })
  })
})