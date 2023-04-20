const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDark = document.getElementById('theme-toggle-dark-icon')
const themeToggleLight = document.getElementById('theme-toggle-light-icon')

if (
    localStorage.getItem('color-theme') === 'dark' || (
      !('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    //Show the light icon
    themeToggleLight.classList.remove('hidden');
  }else{
    //Show the dark icon
    themeToggleDark.classList.remove('hidden');
  }

  //Listen for toggle button click

  themeToggleBtn.addEventListener('click', toggleMode)

  function toggleMode() {
    //Toggle Icon
    themeToggleDark.classList.toggle('hidden')
    themeToggleLight.classList.toggle('hidden')

    //If is set in local storage
    if(localStorage.getItem('color-theme')){
        //if light, make dark and save in local sorage

        if (localStorage.getItem('color-theme') === 'light'){
           document.documentElement.classList.add('dark')
           localStorage.setItem('color-theme', 'dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light') 
        }
    }

    //if not in local storage
    else{
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light') 
        }else{
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
    }
  }