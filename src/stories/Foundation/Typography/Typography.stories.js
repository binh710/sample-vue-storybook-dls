import Typography from './Typography.vue';

export default {
  title: 'Foundation/Typography',
  component: Typography,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['title-1', 'title-2', 'title-3', 'title-4', 'paragraph-1', 'paragraph-2', 'caption',],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'regular', 'bold'],
    },
  },
};

const Template = (args) => ({
  components: { Typography },
  setup() {
    return { args };
  },
  template: '<typography v-bind="args" />',
});

export const LatoTitle = Template.bind({});
LatoTitle.args = {
  type: 'title-1',
  weight: 'bold',
};

export const LatoParagraph = Template.bind({});
LatoParagraph.args = {
  type: 'paragraph-1',
  weight: 'bold',
};

export const LatoCaption = Template.bind({});
LatoCaption.args = {
  type: 'caption',
  weight: 'bold',
};


