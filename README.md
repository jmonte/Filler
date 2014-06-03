#Filler
==========

Generates Client Side Text on the fly!


## Define

```js
> Filler.define('fruit' , {
		list : [ 'apple' , 'orange' , 'watermelon']
	});
```

## Get Text
```js
> Filler.define('fruit'); // returns either apple, orange, watermelon
```

## Format Output
```js
> Filler.define('fruit' , {
	format : '%i {{0}}s'
}); // returns a number followed by a name of a fruit e.g. 7 apples
```

### Available Formats

Symbol 			| Result 
------------ 	| ------------- 
%s 			 	| One Letter from a-z 
%5s 			| 5 Letters from a-z 
%i 			 	| One Number from 0-9
%3i 			| 3 Numbers from 0-9
{{0}}			| returns a value from the list property
{{\<definition>}} | returns the result of the definition e.g {{fruit}} returns either apple , orange, watermelon

## Override the Output Text
```js
> Filler.define('fruit' , {
>	text : function() {
>		return "No Fruit Available";
>	}
>}); // it always return "No Fruit Available"
```


## Integrate on HTML Element

```html
> \<div data-filler-fruit\>\</div\>  \<!-- Div will be populated with either apple, orange , watermelon --> 
> \<div class="filler-fruit"\>\</div> \<!-- Div will also be populated with either apple, orange, watermelon
```

## Undefine
```js
> Filler.undefine('fruit');
```
