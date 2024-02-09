module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow React.ComponentWithProps",
      category: "Possible Errors",
      recommended: false,
    },
  },
  create(context) {
    return {
      TSTypeReference(node) {
        if (
          node.typeName.type === "TSQualifiedName" &&
          node.typeName.left.name === "React" &&
          node.typeName.right.name === "PropsWithChildren" &&
          node.typeParameters
        ) {
          context.report({
            node,
            message: "Do not use React.ComponentWithProps with generic type arguments.",
          });
        }
      },
    };
  },
};
