# SJTSW
Simple JS Translation System for Webpages

## Usage

### Step 1: Assign ids to elements (is recommended to leave a placeholder in the html file, in case that a user has no javascript to load translations)

```html
<h1 id="youcanputanyid">Lorem ipsum</h1>
<h3 id="str-title-text2">dolor sit</h3>
<p id="str-prefixisrecommended">amet</p>
```

*(see example.html for an example)*

### Step 2: Bind ids to a .js file

```javascript
var translations =
{
	//ENGLISH STRINGS
	'en':
	{
		'youcanputanyid': 'Example text 1',
		'str-title-text2': 'Example text 2',
		'str-prefixisrecommended': 'Example text 3',
	},
	//SPANISH STRINGS
	'es':
	{
		'youcanputanyid': 'Texto de ejemplo 1',
		'str-title-text2': 'Texto de ejemplo 2',
		'str-prefixisrecommended': 'Texto de ejemplo 3',
	},
}
```

*(see translations.js for an example)*

### Step 3: Insert required scripts in your page

1. Your translations in .js format (assuming that they are saved in translations.js)

```html
<script src="translations.js"></script>
```

2. SJTSW Main script

```html
<script src="https://itzselenux.github.io/SJTSW/sjtsw.js"></script>
```
- or if you want to load locally

```html
<script src="sjtsw.js"></script>
```

### Step 4: Load Translate Function 

```html
<script>SJTSW_TranslatePage();</script>
```

- You need to load this function after your page content *(see example.html)*

## Issues

### How can i format a word that is inside a full string? (example: `<a>` or `<p>`)

simply put the format in the translated string

`'str-content-download-1': 'You can <a class="dwn" href="downloads.html">download here!</a>',`
