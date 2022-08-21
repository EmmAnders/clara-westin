<template>
  <div class="a-quote flex flex-col items-center justify-center">
    <blockquote>
      <p class="font-secondary inline-block text-5xl leading-tight">
        THOUGH I WASEN*T ALLOWED TO GO YHR CAVES DUROY BEFORE I WAS 18 YEARS
        OLD.
      </p>
    </blockquote>
  </div>
</template>

<style lang="scss">
.a-quote {
  height: 40vh;
  blockquote {
    width: 60%;
  }

  blockquote p::before
 /*  blockquote p::after */ {
    content: "“";
    font-family: Georgia;
    font-size: 10rem;
    margin: -4rem 0 0 -6rem;
    position: absolute;
    color: var(--light-green);
  }

  /*  blockquote p::after {
    content: "”";
    margin: -1rem -4rem 0 2rem;
  } */
}
</style>
