# ui-importer

A tool to import and manage 3rd-party components, frameworks, libraries, etc.

(WIP / Under development as an example for removing unnecessary css in a modern workflow aka webpack and HMR.)

#### To Develop:
```
npm start
```
* Navigate to a view of your template
* Open the HTML file to edit the template
* Open the CSS file to add custom CSS
* Open the JS file to edit the component or manage the dependencies

#### Adding a component:

* Add the 3rd-party dependencies
```
npm i bootstrap --save-dev
or...
yarn add bootstrap
```

* Create a folder for the thing you'll be building
```
cd ./src
mkdir buttons
```

* Create a file for your custom styles
 ```
 ./src/buttons/buttons.css
 ```

* Make an HTML template
```
./src/buttons/buttons.html
```
(Be sure to use divs/tags and all class names from the 3rd party library that you need for your component to display and work like you expect without customization)

* Make example Javascript component
 - Import any necessary js and css dependencies for your component to work like you expect
 - Import your custom css file
 - Import your html file and render via your js