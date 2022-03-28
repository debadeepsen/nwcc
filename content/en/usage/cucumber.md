---
title: 'Feature Files'
description: ''
position: 8
category: Cucumber
---




Feature files are at the heart of Cucumber. A feature file is a list of steps written in the Gherkin syntax. It's essentially a series of lines (called "steps") describing a test scenario/test case. These lines typically start with one of the following keywords, which describe the purpose of the line.

### `Feature`
This occurs at the top of the file. It describes the purpose of the whole feature file in gist. For example, "Testing the search page".

### `Scenario`
This keyword defines individual sections, and provides a description of the particular test scenario that is being handled by that section.

### `Given`
Defines the pre-condition (what steps already need to have been taken before the test action can be performed). Most often, this is used to specify which page the user should be on to perform the action below.

### `When`
Describes the action to be taken. For example, clicking a button, or typing in some text in a textbox.

### `Then`
This describes the result that is expected, if the actions have been performed while meeting the pre-condition.

> The full list of keywords supported by Cucumber can be found at <a target="_blank" href="https://cucumber.io/docs/gherkin/reference/#keywords">https://cucumber.io/docs/gherkin/reference/#keywords<i class="fa-icon fa-solid fa-arrow-up-right-from-square"></i></a>

## Example

An example of a sample feature file that tests if the search feature of Google is working, would be something like this.

```feature
Feature:
	'When I go to the Google search page, and search for an item,
		I expect to see some reference to that item in the result summary.'

Scenario:
	Given that I have gone to the Google page
	When I add "cats" to the search box
	And click the Search Button
	Then "cats" should be mentioned in the results

Scenario:
	Given that I have gone to the Google page
	When I add "dogs" to the search box
	And click the Search Button
	Then "dogs" should be mentioned in the results
```

<p class="small-text">(example from <a target="_blank" href="https://gist.github.com/fernandogc/1405905">https://gist.github.com/fernandogc/1405905<i class="fa-icon fa-solid fa-arrow-up-right-from-square"></i></a>)</p>