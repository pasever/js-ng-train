/**
 The term Model-View-Controller has been in use since the late 1970s and arose from the Smalltalk project
 at Xerox PARC where it was conceived as a way to organize some early GUI applications.
 Some of the fine detail of the original MVC pattern was tied to Smalltalk-specific concepts,
 such as screens and tools, but the broader ideas are still applicable to applications,
 and they are especially well-suited to web applications.

 The key to applying the MVC pattern is to implement the key premise of a separation of concerns,
 in which the data model in the application is decoupled from the business and presentation logic.
 In client-side web development, this means separating the data, the logic that operates on that data,
 and the HTML elements used to display the data. The result is a client-side application that is easier to develop, maintain, and test.

 The three main building blocks are the model, the controller, and the view.

    Browser --(user interaction)--> Controller --> Model --> Persistence(Rest Service usually)   --(arrow back)-->
    Browser <-- DOM <-- View   <--  Controller <-- Model <--


 The client-side implementation of the MVC pattern gets its data from server-side components,
 usually via a RESTful web service. The goal of the controller and the view is to operate on the data
 in the model to perform DOM manipulation so as to create and manage HTML elements that the user can
 interact with. Those interactions are fed back to the controller, closing the loop to form an interactive application.

 For Angular MVC model look slightly different. Instead of the View we have Templates

 MVC:

 ***
 Models — the M in MVC — contain the data that users work with. There are two broad types of model: view models,
 which represent just data passed from the component to the template, and domain models, which contain the data
 in a business domain, along with the operations, transformations, and rules for creating, storing,
 and manipulating that data, collectively referred to as the model logic.

 The model in an application built using the MVC pattern should:
 - Contain the domain data.
 - Contain the logic for creating, managing and modifying the domain data (even if that means
    executing the remote logic via web services)
 - Provide a clean API that exposes the model data and operations on it

 The model should not:
 - Expose details of how the model data is obtained or managed (in other words, details of the data storage
    mechanism or the remote web service should not be exposed to controllers and views)
 - Contain logic that transforms the model based on user interaction (this is the component's job)
 - Contain logic for displaying data to the user
 ***

 ***
 Controllers (or components) are the connective tissue in an Angular web application between the data model and the views.
 A component that follows the MVC pattern:
 - Contain the logic required to set up the initial state of the template
 - Contain the logic/behaviors required by the template to present data from the model
 - Contain the logic/behaviors required to update the model based on user interaction.

 A Component should nor:
 - Contain logic that manipulates the DOM (that is the job of the template)
 - Contain logic that manages the persistence of data (that is the job of the model)
 ***

 ***
 Views, which are known as templates, are defined using the HTML elements that are enhanced by data bindings.

 Templates should:
 - Contain the logic and markup required to present data to the user

 Templates should not:
 - Contain complex logic (this is better placed in a component or one of the other Angular building blocks,
    such as directives, services or pipes).
 - Contain logic that creates, stores, or manipulates the domain model
 ***


 Pitfalls:
 - Template logic should prepare data only for display and never modify the model
 - Component logic should never directly create, update or delete data from the model
 - The templates and components should never directly access the data store






 **/