import {DEFAULT_PROVIDERS, Provider} from './default-providers'
import minimatch from 'minimatch'

const findEndpoint = (url: string, providers: readonly Provider[]): string | undefined => {
  return providers
    .flatMap(({endpoints}) => endpoints)
    .find(endpoint => endpoint.schemes.some(scheme => minimatch(url, scheme)))?.url
}

class OEmbedElement extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['url', 'proxy', 'providers']
  }

  connectedCallback(): void {
    this.load()
  }

  attributeChangedCallback(): void {
    this.load()
  }

  async load(): Promise<void> {
    const endpoint = findEndpoint(this.url, this.providers)
    if (!endpoint) return

    const apiUrl = `${endpoint}?url=${this.url}`
    const requestUrl = this.proxy.replace('%{url}', apiUrl)

    const res = await fetch(requestUrl)
    const json = await res.json()
    this.innerHTML = json.html
    this.loadScript()
  }

  loadScript(): void {
    for (const element of Array.from(this.querySelectorAll('script'))) {
      const script = document.createElement('script')
      // eslint-disable-next-line github/array-foreach
      Array.from(element.attributes).forEach(el => {
        script.setAttribute(el.name, el.value)
      })
      script.appendChild(document.createTextNode(element.innerHTML))
      element.replaceWith(script)
    }
  }

  get url(): string {
    const url = this.getAttribute('url')
    if (!url) {
      throw new Error('required url')
    }
    return url
  }

  get proxy(): string {
    const proxy = this.getAttribute('proxy')
    if (!proxy) {
      throw new Error('required proxy')
    }
    return proxy
  }

  get providers(): readonly Provider[] {
    const providers = this.getAttribute('providers')
    if (!providers) {
      return DEFAULT_PROVIDERS
    }
    return JSON.parse(providers)
  }
}

declare global {
  interface Window {
    OEmbedElement: typeof OEmbedElement
  }
}

export default OEmbedElement

if (!window.customElements.get('o-embed')) {
  window.OEmbedElement = OEmbedElement
  window.customElements.define('o-embed', OEmbedElement)
}
