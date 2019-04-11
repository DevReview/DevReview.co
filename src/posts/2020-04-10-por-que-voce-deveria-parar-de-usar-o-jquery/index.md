---
id: 1
title: Por que você deveria parar de usar o jQuery
path: 'por-que-voce-deveria-parar-de-usar-o-jquery'
date: '2019-04-11'
image: './jquery.png'
category: 'JavaScript'
categorySlug: 'javascript'
author: 'Israel Júnior'
excerpt: 'Parte da jornada de um Desenvolvedor Front-end é programar em JavaScript. Usar jQuery para fazer coisas simples pode pesar na página ou aplicação por carregar uma biblioteca a mais para pouco uso. Considere usar linguagem pura, sem o uso da biblioteca.'
tags: ['javascript', 'jquery']
---

jQuery é incrível, fato. Assim como outras bibliotecas ou ferramentas de frontend, facilita nossas vidas quando temos uma grande quantidade de código para escrever. Contudo, os browsers têm evoluído e implementado novas funcionalidades e APIs que possibilitam um desenvolvimento mais enxuto e livre de bibliotecas. Muitas dessas funcionalidades foram copiadas diretamente do jQuery.

Em 2006 quando John Resig <a target="_blank" href="https://johnresig.com/blog/barcampnyc-wrap-up/">deu uma palestra</a> falando sobre jQuery, quis revolucionar a maneira como usávamos o JavaScript e apostou em ser a nova geração da linguagem. Naquela época, jQuery permitia manipular o DOM, fazer animações e requisições AJAX de uma maneira muito simples, ajudando desenvolvedores a criar experiências mais dinâmicas e fazer muito mais na Web. Em uma época em que a <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">interface XMLHttpRequest</a>, padrão do Internet Explorer, assim como outras APIs, era inconsistente entre browsers, o jQuery possibilitou crescimento e modernização no desenvolvimento web com uma sintaxe simples e objetiva.

Com o avanço dos browsers (e dos anos) e a chegada do HTML5 e suas diversas APIs, JavaScript em sua forma pura tem sido adotado como padrão no workflow dos desenvolvedores web e vem mostrando que o uso nativo da linguagem não é tão difícil quanto parece. JS puro (ou <a target="_blank" href="http://vanilla-js.com/">Vanilla JS</a> como gostam de chamar) irá reduzir o número de requisições na página e você poderá usar nativamente as APIs já existentes nos browsers modernos sem muito esforço.

## Seletores

O carro-chefe do jQuery é sua facilidade para selecionar objetos no DOM, sejam classes, IDs ou elementos puros do HTML. Felizmente as versões mais recentes do JavaScript já permitem que você selecione elementos de uma maneira semelhante e com uma sintaxe muito simples:

```javascript
var elemento = document.querySelector(seletor);
```

Você pode usar nativamente o `querySelector()` para selecionar tags puras, IDs, classes e pseudo-elementos.

```javascript
/* selecionar pelo ID com jQuery */
var elemento = $('#elemento')

/* selecionar pelo ID nativamente */
var elemento = document.querySelector('#elemento')
```

Se você quiser selecionar uma lista de elementos, deve usar o `querySelectorAll()`. Digamos que você queira esconder ítens em um menu, por exemplo:

```html
<ul class="menu">
	<li class="menu-item">menu item 1</li>
	<li class="menu-item hide">menu item 2</li>
	<li class="menu-item hide">menu item 3</li>
</ul>
```

`.menu-item.hide` são os ítens que queremos esconder, portanto uma lista. O `querySelectorAll()`retorna um array com uma lista dos elementos, que é o que queremos, enquanto o `querySelector()` retorna o próprio elemento.

```javascript
// jQuery
var items = $('.menu-item.hide');
items.hide()

// JavaScript
var items = document.querySelectorAll('.menu-item.hide');
items.forEach(function(elemento){
	// esconde todos os .menu-item.hide
	elemento.style.display = 'none'
})
```

Encontrar elementos dentro de elementos segue o mesmo processo:

```html
<span class="icon"></span>

<button type="button" class="button">
	Botão
	<span class="icon"></span>
</button>

<script>
	var button = document.querySelector('.button');
	var icon = button.querySelector('.icon'); // recupera o .icon dentro de .button
</script>
```

## Ajax

Um outro grande vendedor do jQuery são os métodos de Ajax. A nova **fetch API** será a nova XMLHttpRequest e já é suportada pela maioria dos browsers trazendo uma facilidade muito grande na hora de trafegar dados na página:

```javascript
/* jQuery */
$.ajax({
	url: 'https://swapi.co/api/people/1/',
	context: document.body
}).done(function(response) {
	console.log(response)
});

/* JavaScript */
fetch('https://swapi.co/api/people/1/')
	.then(response => response.json())
	.then(data => {
		console.log(data)
	});
```

## Manipulação de classes

Manipular classes em JavaScript também está tão simples quanto em jQuery. É um recurso muito útil quando você quer trocar, remover ou substituir classes no código. Isso possibilita fazer animações, mostrar/esconder elementos inteiros ou somente recursos visuais na página sem muito esforço, nos dando a possibilidade de aplicar estilos mais elaborados diretamente no arquivo CSS ao invés de usar a propriedade `elemento.style` no JS.

```javascript
// jQuery
$('p').addClass('red');

// JavaScript
var p = document.querySelector('p');
p.classList.add('red');
```

Você pode usar o `classList.add()` para adicionar, `classList.remove()` para remover e `classList.toggle()` para alternar uma classe. Este último método é muito útil quando você quer mostrar/esconder um elemento como um menu ou uma sidebar na página. Por exemplo:

```html
<button class="button">
	Mostrar/esconder sidebar
</button>

<ul class="sidebar hide">
	<li>Menu item 1</li>
	<li>Menu item 2</li>
	<li>Menu item 3</li>
</ul>

<script>
	var button = document.querySelector('.button');
	var sidebar = document.querySelector('.sidebar');

	button.onclick = function() {
		sidebar.classList.toggle('hide')
	}
</script>
```

## Atributos

O método nativo do JavaScript para lidar com atributos HTML é até mais convencional que no jQuery. Enquanto que usando a biblioteca você tem `.attr()`, em JS puro você usa um jeito mais descritivo.

```javascript
// jQuery
$('.menu-item').attr('disabled', true);

// JavaScript
var menuItem = document.querySelector('.menu-item');
menuItem.setAttribute('disabled', true);
```

Remover atributos é tão fácil quanto:

```javascript
var menuItem = document.querySelector('.menu-item');
menuItem.removeAttribute('disabled');
```

Se quisermos pegar o valor do atributo, usamos o método `getAttribute()`:

```html
<input class="input" type="email" placeholder="Digite seu email">

<script>
	// JavaScript
	var input = document.querySelector('.input');
	var inputType = input.getAttribute('type')
	
	console.log(inputType); // email
</script>
```

## DOMContentLoaded

Uma função no jQuery muito comum usada pelos desenvolvedores, o `document.ready()`, possibilita manipular a página somente quando o DOM está pronto. Com JavaScript você pode usar o método nativo `DOMContentLoaded`.

```javascript
/* jQuery */
$(document).ready(function(){
	// DOM pronto!
})

/* JavaScript */
document.addEventListener('DOMContentLoaded', function() {
	// DOM pronto!
}, false)
```

---

Os browsers estão cada vez mais inteligentes e as versões mais recentes do JavaScript estão cada vez mais presentes, transformando a linguagem e a forma como escrevemos código, fornecendo um pacote de métodos nativos para lidarmos com o DOM, Ajax e estilos. Considere usar a linguagem pura na próxima vez que for desenvolver uma página, isso pode economizar 30 kbytes aproximadamente, além de te ajudar a entender melhor como outras linguagens de programação funcionam. Programar em JS sem o uso do jQuery também pode te auxiliar numa transição mais suave para os frameworks e bibliotecas mais recentes, como ReactJS e VueJS.
