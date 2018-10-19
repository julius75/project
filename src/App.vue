<template>
  <b-container>
    <b-navbar toggleable="md" type="dark" variant="info" mt-4>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>


          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>




    <!--<logins></logins>-->
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </b-container>
</template>

<script>
  import Login from "./components/Login.vue";
  import authMixins from './mixins/octokits'
  export default {
    components: {Login},
    name: 'App',
    data(){
      return{
        repositories: []
      }
    },
    mixins: [authMixins],
    components:{
      logins:Login
    },
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
      this.octokit.gitdata.getReference({owner: 'julius75', repo: 'myRepo', ref: 'heads/master'}).then(
        data => {
          console.log(data.length)
        }
      )
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
