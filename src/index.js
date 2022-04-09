const input = document.querySelector('#input')
const searchBtn = document.querySelector('#search-box__btn')
const profileCard = document.querySelector('#profile-card')
const imgAvatar = document.querySelector('#imgAvatar')

// Search username
searchBtn.addEventListener('click', (e) => {
  let inputValue = input.value
  profileCard.style.visibility = 'visible'

  if (!inputValue) {
    alert('Input is empty!')
    return
  }

  fetch(`https://api.github.com/users/${inputValue}`)
    .then(res => {
      return res.json()
    })
    .then(responseData => {
      data(responseData)
    })
})

const data = (data) => {
  const { avatar_url, name, login, public_repos, following, followers, bio, location, html_url } = data

  profileCard.innerHTML = `
    <div id="card-header">
      <div id="image-box">
        <a href=${html_url} target="_blanck">
          <img src=${avatar_url} id="imgAvatar" alt="Profile Image" title="Profile">
        </a>  
      </div>

      <div id="profile-detailes">
        <div id="profile-detailes__name">
          <a href=${html_url} target="_blanck" id="profile-name">${name}</a>

          <div id="username">@${login}</div>
        </div>

        <div id="account-detailes">
          <div class="post account-detailes__child">
            <span class="detailes__number">${public_repos}</span> &nbsp;
            <p class="detailes__title">repositories</p>
          </div>

          <div class="followers account-detailes__child">
            <span class="detailes__number">${following}</span> &nbsp;
            <p class="detailes__title">followers</p>
          </div>

          <div class="following account-detailes__child">
            <span class="detailes__number">${followers}</span> &nbsp;
            <p class="detailes__title">following</p>
          </div>
        </div>
      </div>
    </div>

    <div id="account-info">
      <div class="info">
        <p class="info__text">${bio}</p>
      </div>

      <div id="info">
        <i class="fa-solid fa-2x fa-location-dot"></i>
        <p class="info__text">${location}</p>
      </div>
    </div>
  `
}



// // Get account data from github API
// class Account {
//   async getData() {
//     const result = await fetch(`https://api.github.com/users/${inputValue}`)
//     const data = await result.json()

//     return data
//   }
// }

// // Present data in DOM
// class View {}

// document.addEventListener('DOMContentLoaded', () => {
//   const view = new View()
//   const account = new Account()
// })
