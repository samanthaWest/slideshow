import Validator from 'schema-validator';

// Schema Validation
var schema = {
    types: {
      type: "String",
      required: true,
    test: /^[A-Z\,*+]+$/
    }
  };

var validator = new Validator(schema);

const validate_schema = (req, res, next) => {
    const valid = validator.check(req);
    if (valid._error) { 
        const msg = valid.types.test.message;
        res.send(
            '400', 
            `Client Error: ${msg}`
        );
    }
    next();
}

export { validate_schema };