<template>
<div>
  <b-container align-v="center">
    <div>
      <router-link to="/repolist"><b-button >Create a new repository</b-button></router-link>

    </div>

  </b-container>
  <ol>
    <li v-for="repos in repositories"> <router-link :to="'/sign-up/' + repos.name">{{repos.name}}</router-link></li>
  </ol>
</div>


</template>

<script>
  import authMixins from '../mixins/octokits'
export default {
  name: 'App',
  data(){
    return{
      repositories: []
    }
  },
  methods:{
    openRepo:function () {
      this.octokit.repos.getAll().then(data => {
        this.repositories = data.data;
      })
    }
  },
  mixins: [authMixins],
  created() {
    this.authenticate();
    this.octokit.repos.getAll().then(data => {
//      console.log(data.data.map(repo => repo.name));
      console.log(data);
      this.repositories = data.data;
//      console.log(data.data.map(repo => {
//        return {
//          'name': repo.name,
//          'userName': repo.owner.login
//      }
//      }));
    })

//    this.octokit.projects.createRepoProject({owner: 'julius75', repo: 'Admin', name: 'myproject'}).then(
//      data => {
//        console.log(data);
//      }
//    )

//    this.octokit.repos.get({owner: 'julius75', repo: 'oneLove'}).then (
//      data => {
//        console.log(data);
//      }
//    )

    this.octokit.repos.getCommits({owner: 'julius75', repo: 'oneLove'}).then(
      data => {
        console.log(data);
      }
    )
    this.octokit.repos.getBranches({owner: 'julius75', repo: 'myRepo'}).then(
      data => {
        console.log(data)
      }
    )

//    this.octokit.gitdata.getReference({owner: 'julius75', repo: 'myRepo', ref: 'heads/master'}).then(
//      data => {
//        console.log(data.length)
//      }
//    )
//    this.octokit.gitdata.createReference({owner: 'julius75',
//      repo: 'myRepo', ref:"refs/heads/julius", sha:"4511f52e3a4b3fb4c9c5b49a570f915759aedf92"}).then(
//      data => {
//        console.log(data)
//      }
//    )

//    this.octokit.repos.create({name: 'myRepo'}).then(
//      data => {
//        console.log(data);
//      }
//    )

    //commits
//    this.octokit.gitdata.createCommit({owner: 'julius75', name: 'myRepo', message:'new commits', tree, parents}).then(
//      data => {
//        console.log(data);
//      }
//    )
  }
}
</script>
