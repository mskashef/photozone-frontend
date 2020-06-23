# photozone-frontend
A social media to share images (Created By React)
## installation
To install the dependencies of the project, open the project directory in the terminal and run the following code:
```
npm install
```
And to serve and run the project in your browser, run the following code:
```
npm start
```
and the browser will automatically open this address: `localhost:3000`
# Components Documentation
Here you'll see the API documentation of the components created in this project.

## Thumbnail
Used in many other container components.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| img     | string | The image url |
| title   | string | Title         |
| caption | string | Caption       |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onClick | event object | Executed when users clicks on it |


## PageDetails
Just a button
- props

| prop    | value  | description   |
|---------|--------|---------------|
| text    | string, node, array of nodes |  Button text  |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onClick | event object | Executed when users clicks on it|

## Thumbnail
Just a button
- props

| prop    | value  | description   |
|---------|--------|---------------|
| src    | string |  src of the image  |
| title    | string |  the text chat will show on hover  |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onClick | event object | Executed when users clicks on it|

## PageDetails
Contains some details of a page like followers count, followings count and photos count...
- props

| prop    | value  | description   |
|---------|--------|---------------|
| followers    | number |  # of followers  |
| followings    | number |  # of followings  |
| photos    | number |  # of photos  |

## TabSelection
A component for selecting between several tabs.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| tabs    | array of strings |  a Javascript array of strings that contains the tabs titles |
| activeTab    | string |  Text value of the active tab  |
| onTabChange    | string |  the text chat will show on hover  |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onTabChange | an string: Text value of the destination tab | Executed when user clicks on one of the tabs|




