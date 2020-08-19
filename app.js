//Init Github object
const github = new Github;
//Init UI object
const ui = new UI;
//save input value
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input value
    const userText = e.target.value;
    if (userText !== '') {
        //Make hhtp call
        github.getUser(userText)
            .then(data => {
                // console.log(data);
                if (data.profile.message === 'Not Found') {
                // Show Alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
        })
    } else {
        //Clear profile
        ui.clearProfile();
    }
});