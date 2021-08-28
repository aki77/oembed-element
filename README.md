# `<o-embed />`

oEmbed web component

## Installation

```
$ npm install @aki77/oembed-element
```

## Usage

```js
import '@aki77/oembed-element'
```

```html
<o-embed url="https://www.youtube.com/watch?v=P_HNazfxhlU" proxy="https://cors-proxy?%{url}"></o-embed>
```

## Attributes

### Required

- `url`
- `proxy`

  most of the the sites do not have cors enabled, so cors proxy is necessary in most cases.
  Above used proxy is just for demonstration and is slow and highly rate limited, so provide your own [Cors proxy](https://gist.github.com/jimmywarting/ac1be6ea0297c16c477e17f8fbe51347).

### Optional

- providers

  [Default providers](https://github.com/aki77/oembed-element/blob/main/src/default-providers.ts) are just a handful, you have hundreds to choose from.
  Say you want to extend suppport to more sites, go to https://oembed.com/providers.json, choose a provider object and pass it. Say we pick the first one, TwoThreeHQ, we will use it like this.

  ```html
  <o-embed url="..." proxy="..." providers="[{\"provider_name\":\"23HQ\",\"provider_url\":\"http://www.23hq.com\",\"endpoints\":[{\"schemes\":[\"http://www.23hq.com/*/photo/*\"],\"url\":\"http://www.23hq.com/23/oembed\"}]}]"></o-embed>
  ```

## Browser support

Browsers without native [custom element support][support] require a [polyfill][].

- Chrome
- Firefox
- Safari
- Microsoft Edge

[support]: https://caniuse.com/#feat=custom-elementsv1
[polyfill]: https://github.com/webcomponents/custom-elements

## Development

```
npm install
npm test
```

## License

Distributed under the MIT license. See LICENSE for details.
