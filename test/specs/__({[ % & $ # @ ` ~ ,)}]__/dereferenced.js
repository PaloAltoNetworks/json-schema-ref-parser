export default {
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
};
