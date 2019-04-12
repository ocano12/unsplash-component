## unsplash-assignment

Display a random image from Unsplash for X amount of seconds

## Installation

To install, you can use npm :

```
npm install unsplash-assignment

```

## Usage

Example:

```javascript
import { UnsplashComponent } from "unsplash-assignment";
```

```html
<UnsplashComponent
  seconds="set # of Seconds"
  apiKey="{insert your private key}"
/>
```

The component has two props you can pass to it.
-seconds - Will dictate the number of seconds the image is up for
-apiKey - this is required and its your own apiKey that you can obtain @ Unsplash

## Style the view

The component is set with a max-width of 100%
This allow you to manage the size of the image
by wrapping it in an element

```html
<div ClassName="contianer">
  <p>View content</p>
</div>
```

```css
.container {
  width: 400px;
  height: 400px;
}
```
