/**
    There are some oddities in the HTMl and DOM specifications that means that not all HTML element attributes
    have equivalent properties in the DOM API. Fot these cases, Angular provide the attribute binding, which
    is used to set an attribute on the host element rather than setting the value of the JS object
    that represent it in the DOM.

    The most commonly encountered attribute without a corresponding property is colspan, which is used to set
    the number of columns that a td element will occupy in a table.


    for ex: <td [attr.colspan]="getProducts.length()">
**/