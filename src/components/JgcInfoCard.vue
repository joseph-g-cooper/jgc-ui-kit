<template>
	<div id='jgc-info-card' :style="{ 
		'--size': size, 
		'--background': background, 
		'--border-width': borderWidth, 
		'--border-style': borderStyle, 
		'--border-color': borderColor,
		}">
		<h1 v-bind:title='title' :style="{ 
			'--title-size': titleSize, 
			'--title-color': titleColor,
			}">
			{{title}}
		</h1>
		<p v-bind:description='description' :style="{
			'--description-size': descriptionSize,
			'--description-color': descriptionColor,
		}">
			{{description}}
		</p>
	</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	name: 'jgc-info-card',
	props: {
		size: {
			type: String,
			default: '16rem',
		},
		background: {
			type: String,
			default: '#f0f0f0',
		},
		borderWidth: {
			type: String,
			default: '1px',
		},
		borderStyle: {
			type: String,
			default: 'solid',
		},
		borderColor: {
			type: String,
			default: '#000000',
		},
		title: {
			type: String,
			default: '',
		},
		titleSize: {
			type: String,
			default: '1.5rem',
		},
		titleColor: {
			type: String,
			default: '#000000',
		},
		description: {
			type: String,
			default: '',
		},
		descriptionSize: {
			type: String,
			default: '0.8rem',
		},
		descriptionColor: {
			type: String,
			default: '#000000',
		},
	}
});
</script>

<style scoped lang='scss'>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

	#jgc-info-card {
		width: var(--size);
		height: calc(var(--size) * 0.5);
		border: var(--border-width) var(--border-style) var(--border-color);
		border-radius: calc(var(--size) * 0.07);
		background-color: var(--background);
	}

	#jgc-info-card h1 {
		margin: calc(var(--size) * 0.05);
		font-family: 'Montserrat';
		font-size: var(--title-size);
		color: var(--title-color);
	}

	#jgc-info-card p {
		margin: calc(var(--size) * 0.05);
		font-family: 'Montserrat';
		font-size: var(--description-size);
		color: var(--description-color);
	}
</style>

<docs>
## Examples
Basic info card from the jgc ui kit
```jsx
<jgc-info-card />
```

## Change the info card's styles
Changing the size and background colors

```jsx
<jgc-info-card 
    size='192px'
    background='#ef23e0'
/>
```

Changing the border styles

```jsx
<jgc-info-card
    borderWidth='2px'
    borderStyle='dashed'
    borderColor='#00ff00'
/>
```

## Add a title to the card
```jsx
<jgc-info-card
    title='Hello World'
/>
```

## Change title styles
```jsx
<jgc-info-card
    title='Hello World'
    titleSize='2rem'
    titleColor='#ff0055'
/>
```

## Add a description to the card

```jsx
<jgc-info-card
    description='Hello World'
/>
```

If a title and description is added, the title will always appear above the description
```jsx
<jgc-info-card
    title='Hello world'
    description='This is a way to say hello to the world!'
/>
```

## Change description styles
```jsx
<jgc-info-card
    title='Hello world'
    description='This is a way to say hello to the world!'
    descriptionSize="1.4rem"
    descriptionColor="#ff0000"
/>
```
</docs>