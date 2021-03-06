export const NODE_HANDLERS = {
  READ_ROOT: 'readRoot', // parent node
  READ_FORM: 'readForm', // form component
  READ_CHILD: 'readChild',
  READ_AS_VALUE: 'readAsValue',
  READ_AS_OBJECT: 'readAsObject',
  READ_COEXIT_RELATION: 'readCoexitRelation',
  READ_MUTUALEXCLUSION_RELATION: 'readMutualExclusion',
  READ_NONE_ITEM: 'readNoneItem',
};

export const TYPE = {
  NUMBER: 'number',
  STRING: 'string',
  MAP: 'map',
  ARRAY: 'array',
  DATE: 'date',
  FILE: 'file', // only suppport Electron
};

export const STATE = {
  DISABLED: 'disabled',
  DEFAULT: 'default',
  REPEAT: 'repeat',
};

export const MESSAGE = {
  PARAM_TYPE_IS_INVALID: (key: string, correctType: string) =>
    `${key}: The field value is invalid, it should be:${correctType}`,
  KEY_IS_NOT_DEFINED: 'The attribute "key" is not defined',
  SHOULD_NOT_BE_OBJECT_WITH_CONNECTION: (key: string) =>
    `${key} Defined that there is an association relationship between its own elements, it cannot be set to：isObject`,
  SHOULD_HAS_ITEMS_WITH_OBJECT: (key: string) =>
    `${key}: There should be items in object, it can be: []`,
  SHOULD_HAS_ITEMS_WITH_CONNECTION: (key: string) =>
    `${key}: Describe the relational data of the child element, the items field must exist, which can be: []`,
  SHOULD_HAS_TYPE_WITH_CONNECTION: (key: string) =>
    `${key}: Describe the relational data of the child element, the "type" field is required`,
  SHOULD_HAS_RELATION: (key: string) =>
    `${key}:
    If "items" is defined, the relationship field "mutualExclusion, coexit" must be defined and described`,
  SHOULD_NOT_HAS_TYPE: (key: string) =>
    `${key}:
    Its value is related to the selection of child elements, and its child elements should not have value types`,
  PARENT_SHOULD_HAS_CHILDREN:
    'The parent element needs to have an "items" field',
  SCHEMA_SHOULD_NOT_BE_EMPTY: 'schema should not be empty',
};
