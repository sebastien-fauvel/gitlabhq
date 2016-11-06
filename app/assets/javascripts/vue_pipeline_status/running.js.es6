/* global Vue, gl */
/* eslint-disable no-param-reassign */

((gl) => {
  gl.VueRunningPipeline = Vue.extend({
    components: {
      'vue-running-icon': gl.VueRunningIcon,
    },
    props: [
      'pipeline',
      'pipelineurl',
    ],
    template: `
      <td class="commit-link">
        <a :href='pipelineurl(pipeline.id)'>
          <span class="ci-status ci-running">
            <vue-running-icon></vue-running-icon>
            &nbsp;running
          </span>
        </a>
      </td>
    `,
  });
})(window.gl || (window.gl = {}));
