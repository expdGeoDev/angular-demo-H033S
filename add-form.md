# Adding a coffee item to Coffee Data 

## Requirements

### Minimum viable product
- HTML form as a container
- Minimum inputs
  - Brand
  - Ground vs beans
  - Roast type
  - Submit button
  - Reset button
- Submitting the form adds the new coffee in memory
	- Use `src/app/coffee-data.service`
- User is informed about newly added coffee data
  - This should not be part of the form component, but a separate component

### Better

- Mark minimum inputs as required
- Additional Inputs
  - Single origin
  - Flavor notes
  - Grind slider

You decide whether you want to use custom elements for any of the above, or just have standard HTML 
with Angular directives

## Stretch goals

- Submitting the form adds the new coffee to rest-server (peek at package.json's dependencies for details)
  - [JSON Server docs for v0.17.4](https://github.com/typicode/json-server/tree/v0)
  - For this you could use `src/app/coffee-http.service`
  - Start the REST server with `npm run rest-server`
  - Loads data from `src/data/coffee-data.json`
- Form validation?
- Brand autocomplete?

## Architectural thoughts 

You don't have to follow these. We sketched out some ideas and this is what we came up with.
THESE ARE NOT REQUIREMENTS.

- AddFormComponent
	- BrandInput is a custom component
		- Mostly a wrapper around <input type="text">
	- Ground or beans are standard HTML radio buttons
	- Roast type is a standard drop-down/select list
	- Single origin is a toggle (library? Standalone? Implementation?)
		- Or is it just a checkbox?
		- Less fun, but faster to implement!
	- Flavor notes is a standard HTML textarea
	- GrindSlider is a custom component
		- Lots of opportunity for custom behavior here
	- Reset and Submit are standard HTML buttons under AddFormComponent
	- Some sort of "required" indicator

- After clicking on the submit button
	- Validation?
	- Message about the info being submitted
	- Does the user get feedback?
		- Redirect? To coffee detail page
		- Message about success, staying on the form?
			- Some sort of messaging/logging component

### Other concerns?

- Form validation?
- Do brands auto-complete?
  
