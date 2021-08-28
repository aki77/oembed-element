describe('o-embed', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('o-embed')
      assert.equal('O-EMBED', el.nodeName)
    })
  })
})
