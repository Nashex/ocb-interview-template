import { Tag, nodes, Node } from "@markdoc/markdoc";
import Document from "../../components/nodes/Document";

export const document = {
    ...nodes.document,
    render: Document,
    transform(node: Node, config: any) {
        return new Tag(
            this.render as unknown as any,
            { source: config.source },
            node.transformChildren(config)
        );
    },
};