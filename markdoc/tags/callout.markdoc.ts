import { Callout } from "../../components/tags/Callout";

export const callout = {
  render: Callout,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
  },
};
