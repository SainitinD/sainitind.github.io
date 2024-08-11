<template>
  <div id="desktop-nav">
    <div class="logo">Sainitin.</div>
    <div class="nav-links">
      <a :style="{ color: '#6e06f2' }" href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#work">Work</a>
      <a href="#skills">Skills</a>
      <a href="/resume">Resume</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="chat">Chat</div>
  </div>
</template>

<style scoped>
#desktop-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 0rem;
}

.nav-links {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 1.125rem;
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

/* 
#logo {
  font-size: 2rem;
}

#logo:hover {
  cursor: default;
} */
</style>
