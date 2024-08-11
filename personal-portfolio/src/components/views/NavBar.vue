<template>
    <div id="desktop-nav">
      <a href="#home">Home</a>
      <p>*</p>
      <a href="#projects">Projects</a>
      <p>*</p>
      <a href="#work">Work</a>
      <p>*</p>
      <a href="#skills">Skills</a>
      <p>*</p>
      <a href="/resume">Resume</a>
      <p>*</p>
      <a href="#contact">Contact</a>
    </div>
</template>

<style scoped>
#desktop-nav {
  overflow: hidden;
  display: flex;
  gap: 1rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1;

    /* margin: 0 2rem;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    position: fixed;
    right: 0;
    margin-right: 24px; */
}

a {
  transition: all 300ms ease;
}
/* 
#logo {
  font-size: 2rem;
}

#logo:hover {
  cursor: default;
} */
</style>