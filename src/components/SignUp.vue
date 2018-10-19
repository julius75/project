 <template>
      <b-container>

        {{ $route.params.repo }}

        <div>
          <ol>
            <li v-for="repo in repos">{{repo.data}}</li>
          </ol>
        </div>
      </b-container>

    </template>

 <script>
   import authMixins from '../mixins/octokits'
   export default {
     name: 'signUp',

     mixins: [authMixins],

     data(){
       return{
         repos: []
       }
     },
     created(){

       this.octokit.repos.get({owner: 'julius75', repo: this.$route.params.repo}).then (
         data => {
           this.repos=data.data;
         }
       )
     }

   }
 </script>



