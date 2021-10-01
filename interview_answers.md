# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component? A functional component is usually used to create a component that will be displayed on the page as a DOM element while a stateful component is used to allow us to tap into the Component Lifecycle and to control how component works in the application and may not ever show up on the page.

2. When does a componentWillMount function be called? What about a componentWillUpdate? A componentWillMount function will be called once, when the component mounts. A componentWillUpdate function will be called each time the component updates, so many many times as the application is used.

3. Define stateful logic. Stateful logic is any code in our application that deals with state, for example when a handler function that keeps track of the text inputted into a form on our page or the click events associated with a button or form. It is often not visual to the user.

4. What are the three step of creating a successful test? What is done in each phase? The 3 main steps are:
Arrange - setting up our react component to render on the page
Act - executing user behavior like typing in a form or clicking on a button
Assert - Extracting a response and checking if it is what we expected