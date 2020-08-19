class Github {
    constructor() {
        this.client_id = "91dbc6025d84804dded7";
        this.client_secret = "6a585cddb6737718f064fe297efa5416b6bec88a";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
            
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

         const repoResponse = await fetch(
           `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
         );

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            //in ECMA6 can be just profile
            profile: profile,
            repos: repos
        }
    }
}