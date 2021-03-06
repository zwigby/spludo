/*
 * This file is part of the Spludo Framework.
 * Copyright (c) 2009-2010 DracoBlue, http://dracoblue.net/
 *
 * Licensed under the terms of MIT License. For the full copyright and license
 * information, please see the LICENSE file in the root folder.
 */

/**
 * @class A simple JavascriptView, which needs a render function as parameter
 *        for the real business logic.
 */
JsView = function(name, render_function) {
    if (typeof render_function === "function") {
        this.render = render_function;
    }
    view_manager.addView(name, this);
};

JsView.prototype.render = function(params, context, inner) {
    throw new Error("Implement the .render method!");
};
