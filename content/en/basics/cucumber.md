---
title: Cucumber
description: ''
position: 3
category: Basics
---

## What is Cucumber?

Cucumber is a tool that supports and facilitates Behaviour-driven Development (BDD). BDD is a software process that helps business owners stay in touch with developers better, by specifying the _behaviour_ they want to see in their software, and having developers implement such behaviour. Cucumber helps this process by allowing business owners or quality assurance (QA) analysts to write system documentation (in a format similar to plain, simple English) that can then be verified against the system automatically.

## How does it work?

Cucumber allows users to write in a syntax called "Gherkin". It is a set of grammar rules that makes plain text structured enough for Cucumber to understand. An example of a sample gherkin file would be something like this.

```
Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.
  
  Scenario: Simple Google search
    Given a web browser is on the Google page
    When the search phrase "panda" is entered
    Then results for "panda" are shown
```
<p class="small-text">(example from <a target="_blank" href="https://automationpanda.com/2017/01/27/bdd-101-gherkin-by-example/">https://automationpanda.com/2017/01/27/bdd-101-gherkin-by-example/<i class="fa-icon fa-solid fa-arrow-up-right-from-square"></i></a>)</p>

The code above would be stored in something we call a "feature file". The individual lines are called "steps", which are then verified using "step definitions", that can be written in various programming languages. For this tutorial, we will be using Nightwatch and JavaScript to write definitions and verify Cucumber steps.