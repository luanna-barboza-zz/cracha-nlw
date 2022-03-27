const linksSocialMedia = {
  github: 'luanna-barboza',
  instagram: 'luannaa_barboza',
  facebook: 'luanna.barboza',
  twitter: 'luanna_barboza',
  linkedin: 'luanna-barboza'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}
getSocialMediaLinks()

function changeLinkedInLink() {
  for (let li of socialLinks.children) {
    li.children[0].href = `http://linkedin.com/in/${linksSocialMedia.linkedin}`
  }
}

getLinkedInLink()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
