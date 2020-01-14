
<template>
<div>
  <div
    class="accordion-item"
    v-for="(content, i) in contents" :key="content.title"
    v-bind:class="{ 'accordion-active': content.active }"
  >
    <div class="accordion-header">
      <a href="#" v-on:click="expand(event, i)">
        <div class="accordion-header-div">{{ content.title }}</div>
        <div class="accordion-header-div">
          <div class="accordion-caret"></div>
        </div>
      </a>
    </div>

    <div class="accordion-body" v-bind:ref="'accordion-body-' + i">
      <div class="accordion-content">{{ content.description }}</div>
    </div>

  </div>
</div>
</template>

<script>

import {Bounce,TweenLite,Elastic} from "gsap"

var data = {
    contents:
    [{
        title: "'Lorem ipsum dolor sit amet'",
        description: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'",
        active: false
    },
    {
        title: "'Vue js is Fucking AWFUUUUULLLLLLL!'",
        description: "'i think vue js is fucking awful.. cuz official documents is sucks, like a fucking shiiiiiit even tho i need learn this fucking language'",
        active: false
    }
    ]
}
export default {
name: 'Accordion',

props: {
    msg: String
},

data: function () {      
    return data;
},

methods: {
    expand: function(e, i) {
        //todo  preventDefault not working.. need fix it
        // e.preventDefault();

        let el = this.$refs['accordion-body-' + i][0];

        if (this.contents[i].active === false) {
            this.contents[i].active = true;

            TweenLite.to(el, 1, {
                height: el.scrollHeight,
                ease: Elastic.easeOut.config(1, 0.3)
            });
        } else {
            this.contents[i].active = false;

            TweenLite.to(el, 0.5, {
                height: 0,
                ease: Bounce.easeOut
            });
        }
    }
	},

}
</script>

<style lang="scss" scoped>

$base-color: #727272;
$base-width: 320px;
$base-time: 200ms;

$app-background-color: #82dfff;
$app-padding: 2rem;

$accordion-background-color: #ffffff;
$accordion-max-width: $base-width;
$accordion-padding: 2rem 1rem;
$accordion-border-radius: 0.5rem;
$accordion-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);

$accordion-header-font-size: 1.2rem;
$accordion-header-height: 2rem;
$accordion-header-padding: 1rem 1rem 1rem 1rem;
$accordion-header-border-radius: 0.6rem;
$accordion-header-transition: background-color $base-time ease-in-out;

$accordion-header-hover-background-color: #efefef;

$accordion-caret-color: $base-color;
$accordion-caret-background-image: linear-gradient(
	to top right,
	transparent 50%,
	$accordion-caret-color 50%
);
$accordion-caret-width: 0.5rem;
$accordion-caret-height: 0.5rem;
$accordion-caret-transform: rotate(-45deg);
$accordion-caret-transforming: scale(1.5) rotate(45deg);
$accordion-caret-active-transform: rotate(135deg);

$accordion-body-content-padding: 1rem;

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");

html, body, #app {
	color: $base-color;
	font-family: Montserrat, sans-serif;
	font-size: 14px;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
}

#app,
.accordion,
.accordion-item,
.accordion-header,
.accordion-body {
	font-family: inherit;
}

#app {
	background-color: $app-background-color;
	display: flex;
	box-sizing: border-box;
}

.accordion {
	background-color: $accordion-background-color;
	width: 100%;
	max-height: 100%;
	max-width: $accordion-max-width;
	padding: $accordion-padding;
	margin: auto;
	box-sizing: border-box;
	overflow: auto;
	box-shadow: $accordion-box-shadow;
}

.accordion-item.accordion-active {
	.accordion-caret {
		animation: accordion-is-active $base-time linear forwards;
	}
}

.accordion-header {
	color: inherit;
	font-size: $accordion-header-font-size;
	font-weight: bold;
	position: relative;
	a {
		color: inherit;
		text-decoration: none;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		border-radius: $accordion-header-border-radius;
		transition: $accordion-header-transition;
		&:not(.accordion-active):hover {
			background-color: $accordion-header-hover-background-color;
		}
	}
}

.accordion-header-div {
	padding: $accordion-header-padding;
	&:last-child {
		padding-left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.accordion-caret {
	background-image: $accordion-caret-background-image;
	width: $accordion-caret-width;
	height: $accordion-caret-height;
	transform: $accordion-caret-transform;
	animation: accordion-is-inactive $base-time linear forwards;
}

.accordion-body {
	height: 0;
	overflow: hidden;
}

.accordion-content {
	padding: $accordion-body-content-padding;
}

@keyframes accordion-is-inactive {
	0%   { transform: $accordion-caret-transform; }
	50%  { transform: $accordion-caret-transforming; }
	100% { transform: $accordion-caret-active-transform; }
}

@keyframes accordion-is-active {
	0%   { transform: $accordion-caret-active-transform; }
	50%  { transform: $accordion-caret-transforming; }
	100% { transform: $accordion-caret-transform; }
}

@media screen and (min-width: $base-width) {
	#app {
		padding: $app-padding;
		overflow: auto;
	}

	.accordion {
		max-height: none;
		border-radius: $accordion-border-radius;
	}
}

.accordion{
width: 1rem;
height: 1ren;
color: black;
margin: 10px;
}
.accordion-caret {
  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);
  width: 0.5rem;
  height: 0.5rem;
  transform: rotate(-45deg);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>