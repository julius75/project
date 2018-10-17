const octokit = require('@octokit/rest')()

export default {
  data(){
    return{
      octokit: octokit
    }
  },
  methods: {
    authenticate() {
      // basic
      this.octokit.authenticate({
        type: 'basic',
        username: 'julius75',
        password: 'nchagwa75'
      })

    }
  }
}
