# SAP UI5 Demo Nested Views

In SAPUI5, you can create nested views using mvc:XMLView by including one XML view within another XML view. This approach allows you to break down your user interface into smaller, reusable components.

### Code Explaination


Refer to [/webapp/view/App.view.xml](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Nested-Views/blob/master/webapp/view/App.view.xml "App.view.xml")

- `<mvc:View>`: This is the root element of the XML view. It defines a new view.
  - `xmlns="sap.m"` and `xmlns:mvc="sap.ui.core.mvc"`: These are XML namespaces that define shortcuts for the class names in SAPUI5. `sap.m` contains general controls like buttons, lists, etc., and `sap.ui.core.mvc` contains the controls for the Model-View-Controller concept.
  - `displayBlock="true"`: This attribute specifies that the view should be displayed as a block element, which takes up the full available space.

- `<Shell>`: The Shell control is a kind of container that can hold an App or SplitApp control. It also handles user logout if an event handler is attached to the logout event.

- `<App>`: The App control can contain pages that are added to it through the `pages` aggregation.
  - `<pages>`: This is where you add your pages to the App control.
    - `<Page title="{i18n>pageTitle}">`: This creates a new Page control with a title taken from the internationalization model (`i18n`). The key used here is `pageTitle`.
      - `<content>`: This aggregation is where you add your content to the Page control.
        - `<mvc:XMLView viewName="com.vaibhavmojidra.nestedviewsdemo.view.GreetPanel"/>`: This line adds another XML view as content to the page. The view is located at `com.vaibhavmojidra.nestedviewsdemo.view.GreetPanel`.


---

[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Nested-Views/master/screenshots/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 2.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Nested-Views/master/screenshots/2.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 3.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Nested-Views/master/screenshots/3.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)