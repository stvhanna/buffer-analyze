/*
 * Contextual Presets configuraton
 *
 * the xAxis and yAxis, strings are used to descibe how the data
 * is going to be computed and visualized
 *
 * For xAxis the possible configurations are 'dates', 'weekDays' and 'postTypes'
 * weekDays are: X-Axis: Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday
 * postTypes are: Text | Photo | Video | Link
 *
 * The yAxis is to inform both the the metrics are calculated
 * it's an object with the following attirbutes
 * {Object[]} metrics - the list of metrics to process/visualize
 * {String[]} metrics[].keys - the metric key
 * {String[]} [metrics[].keys] - the keys used to compose the metric
 * {String} [metrics[].label] - the label of the metric
 * {String} [aggregationRule] - this defines how the metrics are agregated into one
 */

module.exports = {
  facebook: [
    // {
    //   label: 'When is it most effective to post?',
    //   description: 'Discover which days your audience engages the most with your content.',
    // },
    // {
    //   label: 'Whhat type of content is working?',
    //   description: 'Find out what type of content reasonates well with your audience.',
    // },
    // {
    //   label: 'How does post frequency affect my engagement rate?',
    //   description: 'Learn how your posting frequency encourages users to engage with your content.',
    //   xAxis: 'date',
    //   yAxis: {
    //     label: 'Engagement',
    //     key: 'engagement',
    //     metrics: [
    //       { keys: ['page_engagements', 'post_reach'], aggregationRule: '[0]/[1]' },
    //     ],
    //   },
    // },
    {
      label: 'How does post frequency affect my fan count?',
      description: 'Discover how your posting frequency affects your fan count.',
      xAxis: 'date',
      yAxis: {
        metrics: [
          {
            key: 'posts_count',
            label: 'Posts',
          },
          {
            key: 'new_followers',
            label: 'New Fans',
          },
        ],
      },
    },
    {
      label: 'How does post frequency affect the reach per post?',
      description: 'Discover how your posting frequency affects your reach.',
      xAxis: 'date',
      yAxis: {
        metrics: [
          {
            key: 'posts_count',
            label: 'Posts',
          },
          {
            key: 'post_reach',
            label: 'Reach',
          },
        ],
      },
    },
  ],
};
