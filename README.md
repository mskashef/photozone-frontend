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

## TitledPic
Used in many other container components.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| img     | string | The image url |
| title   | string | Title         |
| caption | string | Caption       |
| userId | string | the user's username in the database       |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onClick | userId: string -> the user's username in the database | Executed when users clicks on it |


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
Thumbnail image
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



## NewPostSvgIcon
Just a Title bar with an empty body which the programmer can fill it with some elements.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| children    | anything that can be rendered in react | The children of the NewPostSvgIcon goes here. |




## PageBody
PageBody Card Component

- props

| prop    | value  | description   |
|---------|--------|---------------|
| title | a string | Title of the post |
| photo | a string | url of the post photo |
| publisherName | a string | name of the post publisher |
| publisherProfPic | a string | url of the publisher prodile picture |
| moreOptions | array of objects with shape: {title: a_string, onSelect: a_function (params: postId)}} |  |
| postId | a string | id of the post in the database |
| publisherId | a string | username of the post publisher |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onPublisherClick | a string: username of the publisher | Executed when user clicks on the post publisher|



## HomeSvgIcon
It's just a home icon used in the NavBar. I put it inside of a component cause:
1. it's a svg icon
2. it has two states (so has two colors): one: active state with color #333 and non active state with color: #777
- props

| prop    | value  | description   |
|---------|--------|---------------|
| active | a boolean | Identifies that if this icon is selected tab |
| color | a string | Regular color |
| activeColor | a string | Active color |

- methods

| prop    | arguments  | description   |
|---------|--------|---------------|
| onClick | event object | Executed when user clicks on it |


## SearchSvgIcon
Same as HomeSvgIcon.

## NewPostSvgIcon
Same as HomeSvgIcon.

## ChatsSvgIcon
Same as HomeSvgIcon.

## ProfileSvgIcon
Same as HomeSvgIcon.



## NavBar
The navigation bar used in many pages
- props

| prop    | value  | description   |
|---------|--------|---------------|
| activeTab | a string | The initially opened tab |

- methods

| prop    | arguments  | description   |
|---------|--------|---------------|
| onChangeTab | a string: tab | Executed when user clicks on a tab |


## PageBody
It's just a container for body content.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| children | anything | Here we can insert anything that can be rendered as a react element |
