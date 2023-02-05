import { nodes, Tag } from '@markdoc/markdoc';
import { CodeBlock } from '../../components/nodes/CodeBlock';

export const fence = {
  render: CodeBlock,
  attributes: nodes.fence.attributes,
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    return new Tag(this.render, { ...attributes }, [node.attributes.content]);
  },
};
