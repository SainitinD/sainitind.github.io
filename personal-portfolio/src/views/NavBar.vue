<template>
  <div id="nav-styling">
    <div id="desktop-nav">
      <div class="logo">SainitinD<span class="purple">.</span></div>
      <div class="nav-links">
        <a :style="{ color: '#6e06f2' }" href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="/resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="chat">Let's Chat</div>
    </div>
  </div>
</template>

<style scoped>
#nav-styling {
  display: flex;
  justify-content: center;
  width: 100%;
  /* position: sticky;
  top: 10px; */
}

#desktop-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 0rem;
  width: 100%;
  max-width: 1300px;
  font-size: 1.125rem;
}

.logo {
  font-weight: bold;
}

.logo > span {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  flex-direction: row;
  gap: 1rem;

}

a {
  transition: all 300ms ease;
  font-weight: 500;
  color: #4e525a;
  text-decoration: inherit;
}

a:hover {
  color: #6e06f2;
}

.chat {
  font-weight: 400;
}

/* 
#logo {
  font-size: 2rem;
}

#logo:hover {
  cursor: default;
} */
</style>
