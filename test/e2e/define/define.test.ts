import { nextTestSetup } from 'e2e-utils'

describe('compiler.define', () => {
  const { next } = nextTestSetup({
    files: __dirname,
  })

  describe('compiler.define', () => {
    it('should render the magic variable on server side', async () => {
      const res = await next.fetch('/')
      const html = (await res.text()).replaceAll(/<!-- -->/g, '')
      expect(html).toContain('Server value: foobar')
      expect(html).toContain('Client value: foobar')
    })

    it('should render the magic variable on client side', async () => {
      const browser = await next.browser('/')
      const text = await browser.elementByCss('body').text()
      expect(text).toContain('Server value: foobar')
      expect(text).toContain('Client value: foobar')
    })
  })

  describe('compiler.defineServer', () => {
    it('should render the inlined variable on server side', async () => {
      const res = await next.fetch('/with-server-only')
      const html = (await res.text()).replaceAll(/<!-- -->/g, '')
      expect(html).toContain('Server value: server')
    })

    it('should not render the inlined variable on client side', async () => {
      const browser = await next.browser('/with-server-only')
      const text = await browser.elementByCss('body').text()
      expect(text).toContain('Client value: not set')
    })
  })
})
