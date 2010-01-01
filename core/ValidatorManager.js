/*
 * This file is part of the Spludo Framework.
 * Copyright (c) 2009 DracoBlue, http://dracoblue.net/
 *
 * Licensed under the terms of MIT License. For the full copyright and license
 * information, please see the LICENSE file in the root folder.
 */

/**
 * @class The manager for all registered validators.
 * 
 * @extends Logging
 * 
 * @since 0.1
 * @author DracoBlue
 */
ValidatorManager = function() {
    this.validators = {};
};

process.mixin(true, ValidatorManager.prototype, Logging.prototype);

ValidatorManager.prototype.addValidator = function(name, validator) {
    this.info("addValidator: name:" + name);
    this.validators[name] = validator;
};

ValidatorManager.prototype.getValidator = function(name) {
    if (this.validators[name]) {
        return this.validators[name];
    }

    throw new Error("Validator for name " + name + " not found!");
};

ValidatorManager.prototype.shutdown = function() {
    for (name in this.validators) {
        /*
         * Check wether this validator has a shutdown method.
         */
        if (typeof this.validators[name].shutdown === "function") {
            try {
                this.validators[name].shutdown();
            } catch (e) {
                this.warn("Exception when trying to shutdown validator " + name);
                this.warn(e);
            }
        }
    }
};