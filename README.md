# Slighty

A lightweight, compact an simple to use JQuery slider

## Getting Started

Include

```
<link href="css/slighty.css" rel="stylesheet">
<script src="js/slighty.js"></script>
```

HTML Marckup

```
<div id="slighter" class="slighty-container">
    <ul class="slighty">
      <li class="item" data-img-src="http://placehold.it/1000x400" >1</li>
      <li class="item" data-img-src="http://placehold.it/1000x400">2</li>
      <li class="item" data-img-src="http://placehold.it/1000x400">3</li>
    </ul>
    <span class="slighty-next">Next</span>
    <span class="slighty-prev">Prev</span>
    <ul id="count-pills"></ul>
</div>
```

Javascript

```
$("#slighter").slighty({
    "auto":true,
    "effect":'fade'
});
```

### Requires

JQuery 1.6.+