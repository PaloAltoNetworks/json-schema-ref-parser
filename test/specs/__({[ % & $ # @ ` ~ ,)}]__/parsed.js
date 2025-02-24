export default {
  schema: {
    definitions: {
      foo: {
        $ref: "__(%7B%5B%20%25%20%26%20%24%20%23%20%40%20%60%20~%20%2C)%7D%5D__/__(%7B%5B%20%25%20%26%20%24%20%23%20%40%20%60%20~%20%2C)%7D%5D__.json#/definitions/foo"
      },
      "__<({[ % & $ # @ + = ? \\ / \" ' ' ` ~ , ; : >)}]__": {
        $ref: "__(%7B%5B%20%25%20%26%20%24%20%23%20%40%20%60%20~%20%2C)%7D%5D__/__(%7B%5B%20%25%20%26%20%24%20%23%20%40%20%60%20~%20%2C)%7D%5D__.json#/definitions/__%3C(%7B%5B%20%25%20%26%20%24%20%23%20%40%20%2B%20%3D%20%3F%20%5C%20%2F%20%22%20'%20'%20%60%20~%20%2C%20%3B%20%3A%20%3E)%7D%5D__"
      }
    }
  },

  file: {
    definitions: {
      foo: {
        type: "object",
        description: "Testing file/folder names with spaces and special characters"
      },
      "__<({[ % & $ # @ + = ? \\ / \" ' ' ` ~ , ; : >)}]__": {
        type: "object",
        description: "Testing internal $refs with spaces and special characters"
      }
    }
  }
};
