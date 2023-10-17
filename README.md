
# PseudoInlineStyles

**PseudoInlineStyles** is a JavaScript utility that lets you write and style pseudo classes in your inline CSS.

## Installation

Add the CDN to the head of your HTML.
```html
<script src="https://cdn.jsdelivr.net/gh/dara-tobi/pseudo-inline-styles@1.0.1/src/pseudo-inline-styles.js"></script>
```

## Usage

Add the intialisation script at the end of the body in your HTML.
```html
<script>
  pseudoInlineStyles.enable();
</script>
```

Then you can write pseudo classes like `:after`, `:focus`, `:hover`, e.t.c., in your HTML; like so

```html
<a href="#" id="primary-link" class="button large" style="
  :after: content: ' SOFTWARE';
  :focus: text-decoration: underline !important;
  :focus: border-radius: 10px;
  :focus-within: border-bottom: 2px solid crimson !important;
  :hover: background-color: red !important;
  :hover: color: black !important;
  :active: outline: 4px solid black;
  text-decoration: none;
  color: white;
  background-color: #005493;
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;">12 HANDS</a>
```

## Enabling extra pseudo classes
By default, only eight classes (`active`, `focus`, `hover`, `visited`, `after`, `before`, `selected`, and `first-child`) are enabled.

To enable more pseudo classes, initialise pseudoInlineStyles with an object that contains an array of the addtional classes, with `pseudoStyleTypes` as its key:

```html
<script>pseudoInlineStyles.enable({pseudoStyleTypes: ['focus-within', 'last-child']})</script>
```
