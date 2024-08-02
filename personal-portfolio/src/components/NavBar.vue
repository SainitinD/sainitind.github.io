<template>
    <div id="desktop-nav">
        <div id="logo">Sainitin Daverpally</div>
        <div class="nav-links">
            <button><a href="#about">About</a></button>
            <button><a href="#projects">Projects</a></button>
            <button><a href="#work">Work Experience</a></button>
            <button><a href="#recommendations">Skills</a></button>
            <button><a href="#contact">Contact</a></button>
        </div>
    </div>
</template>

<style scoped>
#desktop-nav {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
    margin-top: 1rem;
}

.nav-links {
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
}

#logo {
  font-size: 2rem;
}

#logo:hover {
  cursor: default;
}
</style>